package com.timetable.backend.service;

import com.timetable.backend.model.User;
import com.timetable.backend.repo.UserRepository;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class UserDeserializer extends JsonDeserializer<User> {

    @Autowired
    private UserRepository usersRepository;

    @Override
    public User deserialize(JsonParser p, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {
        long userId = p.getLongValue();
        return usersRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
    }
}

