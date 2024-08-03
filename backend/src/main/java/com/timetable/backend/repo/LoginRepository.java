package com.timetable.backend.repo;

import com.timetable.backend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    Optional<Login> findByEmail(String email);
    Optional<Login> findByEmailAndPassword(String email, String password);
}
