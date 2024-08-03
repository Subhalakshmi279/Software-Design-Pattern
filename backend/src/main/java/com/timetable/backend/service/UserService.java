package com.timetable.backend.service;

import com.timetable.backend.model.User;
import com.timetable.backend.model.Login;
import com.timetable.backend.repo.UserRepository;
import com.timetable.backend.repo.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private LoginRepository loginRepo;

    public User registerUser(User user) {
        // Check if user is trying to register as admin
        Optional<Login> adminUser = loginRepo.findByEmail("admin@gmail.com");
        if (user.getEmail().equals("admin@gmail.com") && adminUser.isPresent()) {
            throw new RuntimeException("Admin user cannot be registered.");
        }
        
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

    public Optional<User> findById(Long id) {
        return userRepo.findById(id);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDetails.getName());
        user.setRoll(userDetails.getRoll());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        return userRepo.save(user);
    }

    public Iterable<User> findAllUsers() {
        return userRepo.findAll();
    }
}
