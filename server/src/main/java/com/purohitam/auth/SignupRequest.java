package com.purohitam.auth;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class SignupRequest {

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 6)
    private String password;

    @NotBlank
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Phone number must be valid 10-digit Indian number"
    )
    private String phone;
}