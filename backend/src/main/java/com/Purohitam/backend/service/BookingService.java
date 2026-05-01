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

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;

    // ── Single source of truth for prices (never trust client) ──
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

    // ── Create a new booking ─────────────────────────────────────
    @Transactional
    public BookingResponse createBooking(BookingRequest req) {
        UserEntity user = getLoggedInUser();

        // Validate pooja name server-side
        String price = POOJA_PRICES.get(req.getPooja());
        if (price == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Unknown pooja: " + req.getPooja());
        }

        // Prevent duplicate: same user, same pooja, same date
        if (bookingRepository.existsByUserIdAndPoojaNameAndRitualDate(
                user.getId(), req.getPooja(), req.getDate())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "You already have a booking for " + req.getPooja() + " on this date.");
        }

        Booking booking = Booking.builder()
                .user(user)
                .devoteeName(req.getName())
                .devoteeEmail(req.getEmail())
                .devoteePhone(req.getPhone())
                .poojaName(req.getPooja())
                .poojaPrice(price)                  // price always set by server
                .ritualDate(req.getDate())
                .timeSlot(req.getTime())
                .location(req.getLocation())
                .specialInstructions(req.getInstructions())
                .build();

        return toResponse(bookingRepository.save(booking));
    }

    // ── My bookings (logged-in user) ─────────────────────────────
    public List<BookingResponse> getMyBookings() {
        UserEntity user = getLoggedInUser();
        return bookingRepository.findByUserIdOrderByCreatedAtDesc(user.getId())
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    // ── Single booking detail (owner only) ──────────────────────
    public BookingResponse getBookingById(Long id) {
        Booking booking = findAndAuthorize(id);
        return toResponse(booking);
    }

    // ── Cancel booking (user, PENDING only) ─────────────────────
    @Transactional
    public BookingResponse cancelBooking(Long id) {
        Booking booking = findAndAuthorize(id);
        if (booking.getStatus() != BookingStatus.PENDING) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Only PENDING bookings can be cancelled.");
        }
        booking.setStatus(BookingStatus.CANCELLED);
        return toResponse(bookingRepository.save(booking));
    }

    // ── Admin: all bookings ──────────────────────────────────────
    public List<BookingResponse> getAllBookings() {
        return bookingRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    // ── Admin: filter by status ──────────────────────────────────
    public List<BookingResponse> getBookingsByStatus(BookingStatus status) {
        return bookingRepository.findByStatusOrderByCreatedAtDesc(status)
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    // ── Admin: update status + optional notes ───────────────────
    @Transactional
    public BookingResponse updateStatus(Long id, StatusUpdateRequest req) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Booking not found: " + id));
        booking.setStatus(req.getStatus());
        if (req.getAdminNotes() != null && !req.getAdminNotes().isBlank()) {
            booking.setAdminNotes(req.getAdminNotes());
        }
        return toResponse(bookingRepository.save(booking));
    }

    // ── Admin: dashboard stats ───────────────────────────────────
    public Map<String, Long> getStats() {
        return Map.of(
                "pending",   bookingRepository.countByStatus(BookingStatus.PENDING),
                "confirmed", bookingRepository.countByStatus(BookingStatus.CONFIRMED),
                "completed", bookingRepository.countByStatus(BookingStatus.COMPLETED),
                "cancelled", bookingRepository.countByStatus(BookingStatus.CANCELLED),
                "total",     bookingRepository.count()
        );
    }

    // ── Helpers ──────────────────────────────────────────────────

    // Gets the currently logged-in user from JWT context
    private UserEntity getLoggedInUser() {
        // SecurityContext has the email as principal (set by JwtRequestFilter)
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "User not found"));
    }

    // Ensures the booking belongs to the current user
    private Booking findAndAuthorize(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Booking not found: " + id));
        String currentEmail = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        if (!booking.getUser().getEmail().equals(currentEmail)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Access denied");
        }
        return booking;
    }

    // Maps Booking entity → BookingResponse DTO
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
