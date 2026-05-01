package com.Purohitam.backend.controller;

import com.Purohitam.backend.entity.BookingStatus;
import com.Purohitam.backend.io.BookingRequest;
import com.Purohitam.backend.io.BookingResponse;
import com.Purohitam.backend.io.StatusUpdateRequest;
import com.Purohitam.backend.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    // ── USER ENDPOINTS ────────────────────────────────────────────

    /**
     * POST /api/v1.0/bookings
     * Frontend BookingForm submits here.
     * Auth: JWT cookie sent automatically (credentials: "include")
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookingResponse createBooking(@Valid @RequestBody BookingRequest req) {
        return bookingService.createBooking(req);
    }

    /**
     * GET /api/v1.0/bookings/my
     * Powers the "My Bookings" page — returns only the logged-in user's bookings.
     */
    @GetMapping("/my")
    public List<BookingResponse> getMyBookings() {
        return bookingService.getMyBookings();
    }

    /**
     * GET /api/v1.0/bookings/{id}
     * Single booking detail. Only the owner can view it.
     */
    @GetMapping("/{id}")
    public BookingResponse getBooking(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    /**
     * PATCH /api/v1.0/bookings/{id}/cancel
     * User cancels their own booking. Only PENDING bookings can be cancelled.
     */
    @PatchMapping("/{id}/cancel")
    public BookingResponse cancelBooking(@PathVariable Long id) {
        return bookingService.cancelBooking(id);
    }

    // ── ADMIN ENDPOINTS ───────────────────────────────────────────
    // Note: These are protected by checking email == admin@purohitam.com
    // in the service layer (your project has no ROLE system yet).
    // If you want to add @PreAuthorize later, add roles to AppUserDetailsService.

    /**
     * GET /api/v1.0/bookings/admin/all
     * All bookings, newest first. Admin only.
     */
    @GetMapping("/admin/all")
    public List<BookingResponse> getAllBookings() {
        return bookingService.getAllBookings();
    }

    /**
     * GET /api/v1.0/bookings/admin/filter?status=PENDING
     * Filter bookings by status. Admin only.
     */
    @GetMapping("/admin/filter")
    public List<BookingResponse> getByStatus(@RequestParam BookingStatus status) {
        return bookingService.getBookingsByStatus(status);
    }

    /**
     * PATCH /api/v1.0/bookings/admin/{id}/status
     * Admin changes status (CONFIRMED / CANCELLED / COMPLETED) + optional notes.
     * Body: { "status": "CONFIRMED", "adminNotes": "Pandit Sharma will call you." }
     */
    @PatchMapping("/admin/{id}/status")
    public BookingResponse updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusUpdateRequest req) {
        return bookingService.updateStatus(id, req);
    }

    /**
     * GET /api/v1.0/bookings/admin/stats
     * Dashboard counts: pending, confirmed, completed, cancelled, total.
     */
    @GetMapping("/admin/stats")
    public Map<String, Long> getStats() {
        return bookingService.getStats();
    }
}
