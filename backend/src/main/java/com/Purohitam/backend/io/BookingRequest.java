package com.Purohitam.backend.io;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Data
public class BookingRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Valid email required")
    @NotBlank
    private String email;

    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Valid 10-digit Indian mobile number required")
    private String phone;

    @NotNull(message = "Date is required")
    @Future(message = "Ritual date must be in the future")
    private LocalDate date;

    @NotBlank(message = "Time slot is required")
    private String time;

    @NotBlank(message = "Location is required")
    private String location;               // already resolved by frontend

    private String instructions;           // optional

    @NotBlank(message = "Pooja name is required")
    private String pooja;                  // must match known pooja names
}


