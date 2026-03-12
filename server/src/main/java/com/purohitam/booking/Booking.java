package com.purohitam.booking;

import jakarta.persistence.*;
import lombok.*;

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

    private String date;

    private String time;

    private String location;

    private String instructions;

    private String status;   // PENDING / APPROVED / REJECTED
}