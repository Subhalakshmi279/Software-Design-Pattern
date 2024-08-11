package com.timetable.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.timetable.backend.model.Subject;

public interface SubjectRepo extends JpaRepository<Subject, Long> {
   
}