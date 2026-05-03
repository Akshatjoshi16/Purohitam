package com.Purohitam.backend.controller;

import com.Purohitam.backend.entity.BookingStatus;
import com.Purohitam.backend.io.BookingRequest;
import com.Purohitam.backend.io.BookingResponse;
import com.Purohitam.backend.io.StatusUpdateRequest;
import com.Purohitam.backend.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    // ── USER ENDPOINTS ────────────────────────────────────────────

    /**
     * POST /api/v1.0/bookings
     * Frontend BookingForm submits here.
     * Auth: JWT cookie sent automatically via credentials:"include"
     */
    @PostMapping("/bookings")
    @ResponseStatus(HttpStatus.CREATED)
    public BookingResponse createBooking(@Valid @RequestBody BookingRequest req) {
        return bookingService.createBooking(req);
    }

    /**
     * GET /api/v1.0/bookings/my
     * Powers the MyBookings page — returns only the logged-in user's bookings.
     */
    @GetMapping("/bookings/my")
    public List<BookingResponse> getMyBookings() {
        return bookingService.getMyBookings();
    }

    /**
     * GET /api/v1.0/bookings/{id}
     * Single booking detail — owner only.
     */
    @GetMapping("/bookings/{id}")
    public BookingResponse getBooking(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    /**
     * PATCH /api/v1.0/bookings/{id}/cancel
     * User cancels their own PENDING booking.
     */
    @PatchMapping("/bookings/{id}/cancel")
    public BookingResponse cancelBooking(@PathVariable Long id) {
        return bookingService.cancelBooking(id);
    }

    // ── ADMIN ENDPOINTS ───────────────────────────────────────────

    /**
     * GET /api/v1.0/bookings/admin/all
     */
    @GetMapping("/bookings/admin/all")
    public List<BookingResponse> getAllBookings() {
        return bookingService.getAllBookings();
    }

    /**
     * GET /api/v1.0/bookings/admin/filter?status=PENDING
     */
    @GetMapping("/bookings/admin/filter")
    public List<BookingResponse> getByStatus(@RequestParam BookingStatus status) {
        return bookingService.getBookingsByStatus(status);
    }

    /**
     * PATCH /api/v1.0/bookings/admin/{id}/status
     * Body: { "status": "CONFIRMED", "adminNotes": "Pandit Sharma will call you." }
     */
    @PatchMapping("/bookings/admin/{id}/status")
    public BookingResponse updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusUpdateRequest req) {
        return bookingService.updateStatus(id, req);
    }

    /**
     * GET /api/v1.0/bookings/admin/stats
     */
    @GetMapping("/bookings/admin/stats")
    public Map<String, Long> getStats() {
        return bookingService.getStats();
    }
}