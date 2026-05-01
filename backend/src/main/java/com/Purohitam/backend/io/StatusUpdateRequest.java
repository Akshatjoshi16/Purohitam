package com.Purohitam.backend.io;

import com.Purohitam.backend.entity.BookingStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class StatusUpdateRequest {

    @NotNull(message = "Status is required")
    private BookingStatus status;

    private String adminNotes;   // optional message to show devotee
}

