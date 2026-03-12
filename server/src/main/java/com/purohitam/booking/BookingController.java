package com.purohitam.booking;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    private final BookingService bookingService;

    // ==========================
    // CREATE BOOKING
    // ==========================
    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {

        System.out.println("Booking received: " + booking.getName());

        Booking savedBooking = bookingService.createBooking(booking);

        return ResponseEntity.ok(savedBooking);
    }

    // ==========================
    // GET BOOKINGS FOR USER
    // ==========================
    @GetMapping("/user/{email}")
    public ResponseEntity<List<Booking>> getUserBookings(@PathVariable String email) {

        List<Booking> bookings = bookingService.getUserBookings(email);

        return ResponseEntity.ok(bookings);
    }

    // ==========================
    // USER NOTIFICATIONS
    // ==========================
    @GetMapping("/notifications/{email}")
    public ResponseEntity<List<String>> getNotifications(@PathVariable String email) {

        List<Booking> bookings = bookingService.getUserBookings(email);

        List<String> notifications = bookings.stream()
                .map(b -> "Your pooja booking for "
                        + b.getPooja()
                        + " on "
                        + b.getDate()
                        + " is currently "
                        + b.getStatus())
                .collect(Collectors.toList());

        return ResponseEntity.ok(notifications);
    }
}