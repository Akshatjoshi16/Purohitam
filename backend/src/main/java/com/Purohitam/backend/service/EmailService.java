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

    // -----New: Booking emails---------
    /** Sent immediately when a user submits a booking form */
    public void sendBookingReceivedEmail(
            String toEmail, String name, String poojaName,
            String date, String timeSlot, String location) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("🙏 Booking Received – " + poojaName + " | Purohitam");
        message.setText(
                "Namaste " + name + ",\n\n" +
                        "We have received your booking request. Our team will review it and confirm shortly.\n\n" +
                        "── Booking Details ──────────────────\n" +
                        "Ritual  : " + poojaName + "\n" +
                        "Date    : " + date + "\n" +
                        "Time    : " + timeSlot + "\n" +
                        "Location: " + location + "\n" +
                        "─────────────────────────────────────\n\n" +
                        "You can track your booking status anytime from your 'My Bookings' page on Purohitam.\n\n" +
                        "No payment is required at this stage. Our pandit will contact you after confirmation.\n\n" +
                        "Jai Mahakal 🔱\n" +
                        "Team Purohitam, Ujjain"
        );
        mailSender.send(message);
    }

    /** Sent when admin confirms a booking — includes payment info */
    public void sendBookingConfirmedEmail(
            String toEmail, String name, String poojaName,
            String date, String timeSlot, String location,
            String price, String adminNotes) {

        String notesSection = (adminNotes != null && !adminNotes.isBlank())
                ? "\nMessage from our team:\n\"" + adminNotes + "\"\n"
                : "";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("✅ Booking Confirmed – " + poojaName + " | Purohitam");
        message.setText(
                "Namaste " + name + ",\n\n" +
                        "Your booking has been CONFIRMED! 🎉\n\n" +
                        "── Confirmed Booking Details ────────\n" +
                        "Ritual  : " + poojaName + "\n" +
                        "Date    : " + date + "\n" +
                        "Time    : " + timeSlot + "\n" +
                        "Location: " + location + "\n" +
                        "Amount  : " + price + "\n" +
                        "─────────────────────────────────────\n" +
                        notesSection + "\n" +
                        "── Payment Instructions ─────────────\n" +
                        "Please complete the payment of " + price + " before the ritual date.\n" +
                        "Payment can be made via UPI / Cash to the pandit on arrival.\n" +
                        "Our team will contact you shortly with further instructions.\n" +
                        "─────────────────────────────────────\n\n" +
                        "You can view your booking status anytime in 'My Bookings' on the Purohitam app.\n\n" +
                        "Jai Mahakal 🔱\n" +
                        "Team Purohitam, Ujjain"
        );
        mailSender.send(message);
    }

    /** Sent when admin rejects/cancels a booking */
    public void sendBookingCancelledEmail(
            String toEmail, String name, String poojaName,
            String date, String adminNotes) {

        String reason = (adminNotes != null && !adminNotes.isBlank())
                ? "\nReason: " + adminNotes + "\n"
                : "";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("❌ Booking Cancelled – " + poojaName + " | Purohitam");
        message.setText(
                "Namaste " + name + ",\n\n" +
                        "We regret to inform you that your booking has been cancelled.\n\n" +
                        "── Cancelled Booking ────────────────\n" +
                        "Ritual: " + poojaName + "\n" +
                        "Date  : " + date + "\n" +
                        "─────────────────────────────────────\n" +
                        reason + "\n" +
                        "We apologise for the inconvenience. You are welcome to book again for a different date.\n\n" +
                        "If you have any questions, please reply to this email.\n\n" +
                        "Warm regards,\n" +
                        "Team Purohitam, Ujjain"
        );
        mailSender.send(message);
    }

    /** Sent when admin marks a booking as completed */
    public void sendBookingCompletedEmail(
            String toEmail, String name, String poojaName) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("🙏 Ritual Completed – " + poojaName + " | Purohitam");
        message.setText(
                "Namaste " + name + ",\n\n" +
                        "Your " + poojaName + " has been successfully completed. 🙏\n\n" +
                        "May the blessings of Lord Mahakal bring peace, prosperity, and good health to you and your family.\n\n" +
                        "We would love to hear about your experience. Please visit Purohitam to share your feedback.\n\n" +
                        "Jai Mahakal 🔱\n" +
                        "Team Purohitam, Ujjain"
        );
        mailSender.send(message);
    }
}



