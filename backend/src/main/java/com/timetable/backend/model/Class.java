package com.timetable.backend.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.timetable.backend.service.UserDeserializer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    private String dept;
    private String section;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonDeserialize(using = UserDeserializer.class)
    private User user;
}
