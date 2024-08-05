package com.timetable.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.timetable.backend.model.Subject;

public interface SubjectRepo extends JpaRepository<Subject, Long> {
    Optional<Subject> findByCourseCode(String courseCode);
}
