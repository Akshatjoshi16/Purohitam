package com.Purohitam.backend.service;

import com.Purohitam.backend.io.ProfileRequest;
import com.Purohitam.backend.io.ProfileResponse;
import org.springframework.context.annotation.Profile;

public interface ProfileService {
    ProfileResponse createProfile(ProfileRequest reauest);

    ProfileResponse getProfile(String email);

    void sendResetOtp(String email);

    void resetPassword(String email,String otp,String newPassword);

    void sendOtp(String email);
    void verifyOtp(String email,String otp);



}