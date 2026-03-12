package com.purohitam.booking;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {

        booking.setStatus("PENDING");

        return bookingRepository.save(booking);
    }

    public List<Booking> getUserBookings(String email) {

        return bookingRepository.findByEmail(email);
    }
    public List<Booking> getAllBookings() {

        return bookingRepository.findAll();
    }
    public void updateStatus(Long id,String status){

        Booking booking = bookingRepository.findById(id)
                .orElseThrow();

        booking.setStatus(status);

        bookingRepository.save(booking);
    }

}