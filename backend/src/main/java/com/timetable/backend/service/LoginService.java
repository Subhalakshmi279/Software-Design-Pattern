package com.timetable.backend.service;

import com.timetable.backend.model.Login;
import com.timetable.backend.repo.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login authenticateUser(String email, String password) {
        Optional<Login> login = loginRepository.findByEmailAndPassword(email, password);
        if (login.isPresent()) {
            return login.get();
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}