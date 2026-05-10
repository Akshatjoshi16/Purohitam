
package com.Purohitam.backend.service;

import com.Purohitam.backend.entity.Booking;
import com.Purohitam.backend.entity.BookingStatus;
import com.Purohitam.backend.entity.UserEntity;
import com.Purohitam.backend.io.BookingRequest;
import com.Purohitam.backend.io.BookingResponse;
import com.Purohitam.backend.io.StatusUpdateRequest;
import com.Purohitam.backend.repository.BookingRepository;
import com.Purohitam.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.Purohitam.backend.entity.BookingStatus.*;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final EmailService emailService; // for sending confirmation emails

    // ── Server-side price map ────────────────────────────────────
    private static final Map<String, String> POOJA_PRICES = Map.of(
            "Mahamrityunjay Jaap",  "₹5,100",
            "Kalsarp Dosh Nivaran", "₹3,500",
            "Grah Shanti Pooja",    "₹4,200",
            "Rudra Abhishek",       "₹2,100",
            "Vastu Pujan",          "₹21,000",
            "Pitru Dosh Nivaran",   "₹3,100",
            "Lakshmi Puja",         "₹2,500",
            "Satyanarayan Katha",   "₹1,800"
    );

    // ── Create booking ───────────────────────────────────────────
    @Transactional
    public BookingResponse createBooking(BookingRequest req) {
        UserEntity user = getLoggedInUser();

        String price = POOJA_PRICES.get(req.getPooja());
        if (price == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Unknown pooja: " + req.getPooja());
        }

        if (bookingRepository.existsByUserIdAndPoojaNameAndRitualDate(
                user.getId(), req.getPooja(), req.getDate())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "You already have a booking for " + req.getPooja() + " on this date.");
        }

        Booking booking = Booking.builder()
                .user(user)
                .devoteeName(req.getName())
                .devoteeEmail(req.getEmail())   // ← matches Booking entity field
                .devoteePhone(req.getPhone())   // ← matches Booking entity field
                .poojaName(req.getPooja())
                .poojaPrice(price)
                .ritualDate(req.getDate())
                .timeSlot(req.getTime())
                .location(req.getLocation())
                .specialInstructions(req.getInstructions())
                .build();

        Booking saved=bookingRepository.save(booking);
        //send booking received confirmation email to devotee
        try{
            emailService.sendBookingReceivedEmail(
                    saved.getDevoteeEmail(), saved.getDevoteeName(),
                    saved.getPoojaName(), saved.getRitualDate().toString(),
                    saved.getTimeSlot(), saved.getLocation()
            );
        } catch (Exception ignored){
            /*dont fail booking if email fails */
        }

        return toResponse(saved);
    }

    // ── My bookings ──────────────────────────────────────────────
    public List<BookingResponse> getMyBookings() {
        UserEntity user = getLoggedInUser();
        return bookingRepository.findByUserIdOrderByCreatedAtDesc(user.getId())
                .stream().map(this::toResponse).collect(Collectors.toList());
    }

    // ── Single booking ───────────────────────────────────────────
    public BookingResponse getBookingById(Long id) {
        return toResponse(findAndAuthorize(id));
    }

    // ── Cancel booking ───────────────────────────────────────────
    @Transactional
    public BookingResponse cancelBooking(Long id) {
        Booking booking = findAndAuthorize(id);
        if (booking.getStatus() != BookingStatus.PENDING) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Only PENDING bookings can be cancelled.");
        }
        booking.setStatus(CANCELLED);
        return toResponse(bookingRepository.save(booking));
    }

    // ── Admin: all bookings ──────────────────────────────────────
    public List<BookingResponse> getAllBookings() {
        return bookingRepository.findAllByOrderByCreatedAtDesc()
                .stream().map(this::toResponse).collect(Collectors.toList());
    }

    // ── Admin: filter by status ──────────────────────────────────
    public List<BookingResponse> getBookingsByStatus(BookingStatus status) {
        return bookingRepository.findByStatusOrderByCreatedAtDesc(status)
                .stream().map(this::toResponse).collect(Collectors.toList());
    }

    // ── Admin: update status ─────────────────────────────────────
    @Transactional
    public BookingResponse updateStatus(Long id, StatusUpdateRequest req) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Booking not found: " + id));
        BookingStatus newStatus=req.getStatus();
        booking.setStatus(newStatus);
        if (req.getAdminNotes() != null && !req.getAdminNotes().isBlank()) {
            booking.setAdminNotes(req.getAdminNotes());
        }
        Booking saved=bookingRepository.save(booking);

        try{
            String devoteeEmail=saved.getDevoteeEmail();
            String devoteeName=saved.getDevoteeName();
            String poojaName=saved.getPoojaName();
            String date         = saved.getRitualDate().toString();
            String notes        = saved.getAdminNotes();
            String price        = saved.getPoojaPrice();

            if (newStatus == BookingStatus.CONFIRMED) {
                emailService.sendBookingConfirmedEmail(
                        devoteeEmail, devoteeName, poojaName, date,
                        saved.getTimeSlot(), saved.getLocation(), price, notes
                );
            } else if (newStatus == BookingStatus.CANCELLED) {
                emailService.sendBookingCancelledEmail(
                        devoteeEmail, devoteeName, poojaName, date, notes
                );
            } else if (newStatus == BookingStatus.COMPLETED) {
                emailService.sendBookingCompletedEmail(
                        devoteeEmail, devoteeName, poojaName
                );
            }

        } catch (Exception ignored) { /* don't fail status update if email fails */ }

        return toResponse(saved);
        }



    // ── Admin: stats ─────────────────────────────────────────────
    public Map<String, Long> getStats() {
        return Map.of(
                "pending",   bookingRepository.countByStatus(BookingStatus.PENDING),
                "confirmed", bookingRepository.countByStatus(CONFIRMED),
                "completed", bookingRepository.countByStatus(COMPLETED),
                "cancelled", bookingRepository.countByStatus(CANCELLED),
                "total",     bookingRepository.count()
        );
    }

    // ── Private helpers ──────────────────────────────────────────

    private UserEntity getLoggedInUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "User not found"));
    }

    private Booking findAndAuthorize(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Booking not found: " + id));
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        if (!booking.getUser().getEmail().equals(currentEmail)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Access denied");
        }
        return booking;
    }

    private BookingResponse toResponse(Booking b) {
        return BookingResponse.builder()
                .id(b.getId())
                .poojaName(b.getPoojaName())
                .poojaPrice(b.getPoojaPrice())
                .devoteeName(b.getDevoteeName())
                .devoteeEmail(b.getDevoteeEmail())
                .devoteePhone(b.getDevoteePhone())
                .ritualDate(b.getRitualDate())
                .timeSlot(b.getTimeSlot())
                .location(b.getLocation())
                .specialInstructions(b.getSpecialInstructions())
                .status(b.getStatus())
                .adminNotes(b.getAdminNotes())
                .createdAt(b.getCreatedAt())
                .build();
    }
}