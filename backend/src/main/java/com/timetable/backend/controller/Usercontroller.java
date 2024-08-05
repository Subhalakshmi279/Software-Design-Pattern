package com.timetable.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.timetable.backend.model.User;
import com.timetable.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class Usercontroller {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            // Check if user is trying to register as admin
            if (user.getEmail().equals("admin@gmail.com")) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Admin user cannot be registered.");
            }
            User registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        return userService.findByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{roll}")
    public ResponseEntity<?> getUserByRoll(@PathVariable String roll) {
        return userService.findByRoll(roll)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public Iterable<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @DeleteMapping("/{roll}")
    public ResponseEntity<Void> deleteUser(@PathVariable String roll) {
        userService.deleteUser(roll);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{roll}")
    public ResponseEntity<User> updateUser(@PathVariable String roll, @RequestBody User userDetails) {
        try {
            return ResponseEntity.ok(userService.updateUser(roll, userDetails));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}