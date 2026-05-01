package com.Purohitam.backend.repository;

import com.Purohitam.backend.entity.Booking;
import com.Purohitam.backend.entity.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // All bookings for a specific user (My Bookings page)
    List<Booking> findByUserIdOrderByCreatedAtDesc(Long userId);

    // Admin: filter by status
    List<Booking> findByStatusOrderByCreatedAtDesc(BookingStatus status);

    // Admin: all bookings newest first
    List<Booking> findAllByOrderByCreatedAtDesc();

    // Prevent double-booking same pooja on same date by same user
    boolean existsByUserIdAndPoojaNameAndRitualDate(
            Long userId, String poojaName, java.time.LocalDate ritualDate
    );

    // Stats for admin dashboard
    @Query("SELECT COUNT(b) FROM Booking b WHERE b.status = :status")
    long countByStatus(BookingStatus status);
}

