package com.purohitam.booking;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    // Create booking
    public Booking createBooking(BookingRequest request) {

        Booking booking = Booking.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .pooja(request.getPooja())
                .location(request.getLocation())
                .instructions(request.getInstructions())
                .date(LocalDate.parse(request.getDate()))
                .time(LocalTime.parse(request.getTime()))
                .status(BookingStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .build();

        return bookingRepository.save(booking);
    }

    // Get bookings for user
    public List<Booking> getUserBookings(String email) {
        return bookingRepository.findByEmail(email);
    }

    // Admin: get all bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Admin: approve or reject booking
    public Booking updateStatus(Long id, BookingStatus status) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus(status);

        return bookingRepository.save(booking);
    }
}