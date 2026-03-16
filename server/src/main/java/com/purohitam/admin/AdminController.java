package com.purohitam.admin;

import com.purohitam.booking.Booking;
import com.purohitam.booking.BookingService;
import com.purohitam.booking.BookingStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final BookingService bookingService;

    // ==========================
    // GET ALL BOOKINGS
    // ==========================
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {

        return ResponseEntity.ok(
                bookingService.getAllBookings()
        );
    }

    // ==========================
    // APPROVE BOOKING
    // ==========================
    @PutMapping("/approve/{id}")
    public ResponseEntity<String> approveBooking(@PathVariable Long id) {

        bookingService.updateStatus(id, BookingStatus.APPROVED);

        return ResponseEntity.ok("Booking approved");
    }

    // ==========================
    // REJECT BOOKING
    // ==========================
    @PutMapping("/reject/{id}")
    public ResponseEntity<String> rejectBooking(@PathVariable Long id) {

        bookingService.updateStatus(id, BookingStatus.REJECTED);

        return ResponseEntity.ok("Booking rejected");
    }
}