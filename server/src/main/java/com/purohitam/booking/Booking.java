package com.purohitam.booking;

import com.purohitam.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String pooja;

    private LocalDate date;

    private LocalTime time;

    private String location;

    private String instructions;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    private LocalDateTime createdAt;

    // Relation with user
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}