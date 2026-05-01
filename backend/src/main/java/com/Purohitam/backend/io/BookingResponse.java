package com.Purohitam.backend.io;

import com.Purohitam.backend.entity.BookingStatus;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class BookingResponse {
    private Long id;
    private String poojaName;
    private String poojaPrice;
    private String devoteeName;
    private String devoteeEmail;
    private String devoteePhone;
    private LocalDate ritualDate;
    private String timeSlot;
    private String location;
    private String specialInstructions;
    private BookingStatus status;
    private String adminNotes;
    private LocalDateTime createdAt;
}

