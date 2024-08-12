package com.timetable.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.timetable.backend.model.User;
import com.timetable.backend.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            // Check if user is trying to register as admin
            if ("admin@gmail.com".equals(user.getEmail())) {
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
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @DeleteMapping("/{roll}")
    public ResponseEntity<String> deleteUser(@PathVariable String roll) {
        try {
            userService.deleteUser(roll);
            return ResponseEntity.ok("User deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }

    @PutMapping("/{roll}")
    public ResponseEntity<User> updateUser(@PathVariable String roll, @RequestBody User userDetails) {
        try {
            return ResponseEntity.ok(userService.updateUser(roll, userDetails));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        Optional<User> optionalUser = userService.findByEmail(user.getEmail());
        if (optionalUser.isPresent() && optionalUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Success");
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password.");
        }
    }
}
