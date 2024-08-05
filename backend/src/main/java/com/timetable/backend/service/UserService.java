package com.timetable.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timetable.backend.model.User;
import com.timetable.backend.repo.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public User registerUser(User user) {
        // Check if user already exists
        Optional<User> existingUser = userRepo.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("User already exists with this email.");
        }
        return userRepo.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public Optional<User> findByRoll(String roll) {
        return userRepo.findById(roll);
    }

    public void deleteUser(String roll) {
        userRepo.deleteById(roll);
    }

    public User updateUser(String roll, User userDetails) {
        User user = userRepo.findById(roll).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        return userRepo.save(user);
    }

    public Iterable<User> findAllUsers() {
        return userRepo.findAll();
    }
}
