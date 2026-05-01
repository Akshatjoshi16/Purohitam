package com.Purohitam.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ── Who booked ────────────────────────────────────────────────
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    // ── Devotee contact ───────────────────────────────────────────
    @Column(nullable = false)
    private String devoteeName;

    @Column(nullable = false)
    private String devoteeEmail;      // Lombok generates: getDevoteeEmail()

    @Column(nullable = false)
    private String devoteePhone;      // Lombok generates: getDevoteePhone()

    // ── Ritual info ───────────────────────────────────────────────
    @Column(nullable = false)
    private String poojaName;

    @Column(nullable = false)
    private String poojaPrice;        // set by server from POOJA_PRICES map

    @Column(nullable = false)
    private LocalDate ritualDate;

    @Column(nullable = false)
    private String timeSlot;          // e.g. "Early Morning (4–8 AM)"

    @Column(nullable = false)
    private String location;          // resolved final location string

    @Column(columnDefinition = "TEXT")
    private String specialInstructions;

    // ── Status lifecycle ──────────────────────────────────────────
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BookingStatus status;

    // ── Admin notes (shown to devotee on My Bookings page) ───────
    @Column(columnDefinition = "TEXT")
    private String adminNotes;

    // ── Timestamps ────────────────────────────────────────────────
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.status = BookingStatus.PENDING;  // always starts as PENDING
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
