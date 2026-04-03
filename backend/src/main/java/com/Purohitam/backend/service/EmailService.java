package com.Purohitam.backend.service;

import jakarta.websocket.server.ServerEndpoint;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;

    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    public void sendWelcomeEmail(String toEmail, String name){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("Welcome to Purohitam – Your Spiritual Services Companion");

        message.setText(
                "Dear " + name + ",\n\n" +
                        "Welcome to Purohitam!\n\n" +
                        "We are delighted to have you join our platform. Purohitam helps you conveniently book poojas, consult experienced purohits, and access trusted spiritual services in one place.\n\n" +
                        "Your account has been successfully created, and you can now explore our services.\n\n" +
                        "If you need any assistance, our support team is always here to help.\n\n" +
                        "Warm regards,\n" +
                        "Team Purohitam"
        );

        mailSender.send(message);
    }

    public void sendResetOtpEmail(String toEmail,String otp){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("Purohitam Password Reset Request – OTP Verification");

        message.setText(
                "Dear User,\n\n" +
                        "We received a request to reset your Purohitam account password.\n\n" +
                        "Please use the One-Time Password (OTP) below to proceed:\n\n" +
                        "OTP: " + otp + "\n\n" +
                        "This OTP is valid for 15 Minutes. For your security, please do not share it with anyone.\n\n" +
                        "If you did not request a password reset, please ignore this email or contact support immediately.\n\n" +
                        "Warm regards,\n" +
                        "Team Purohitam"
        );

        mailSender.send(message);
    }
    public void sendOtpEmail(String toEmail,String otp){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("Verify Your Purohitam Account – OTP Inside");

        message.setText(
                "Dear User,\n\n" +
                        "Welcome to Purohitam!\n\n" +
                        "To complete your account verification, please use the One-Time Password (OTP) below:\n\n" +
                        "OTP: " + otp + "\n\n" +
                        "This OTP is valid for 24 Hours. Please do not share it with anyone for security reasons.\n\n" +
                        "If you did not request this verification, please ignore this email.\n\n" +
                        "Warm regards,\n" +
                        "Team Purohitam"
        );

        mailSender.send(message);
    }

}