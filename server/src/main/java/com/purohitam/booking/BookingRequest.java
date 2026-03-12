package com.purohitam.booking;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {

    private String name;

    private String email;

    private String phone;

    private String pooja;

    private String location;

    private String instructions;

    private String date;

    private String time;

}