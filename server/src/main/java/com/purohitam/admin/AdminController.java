package com.purohitam.admin;

import com.purohitam.booking.Booking;
import com.purohitam.booking.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final BookingService bookingService;

    // GET ALL BOOKINGS
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {

        return ResponseEntity.ok(
                bookingService.getAllBookings()
        );
    }

    // APPROVE BOOKING
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> approveBooking(@PathVariable Long id) {

        bookingService.updateStatus(id,"APPROVED");

        return ResponseEntity.ok("Booking approved");
    }

    // REJECT BOOKING
    @PutMapping("/reject/{id}")
    public ResponseEntity<?> rejectBooking(@PathVariable Long id) {

        bookingService.updateStatus(id,"REJECTED");

        return ResponseEntity.ok("Booking rejected");
    }
}