package com.timetable.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timetable.backend.model.Subject;
import com.timetable.backend.model.User;
import com.timetable.backend.repo.SubjectRepo;
import com.timetable.backend.repo.UserRepository;

@Service
public class SubjectService {

    @Autowired
    private SubjectRepo subjectRepo;

    @Autowired
    private UserRepository userRepo;

    public List<Subject> getAllSubjects() {
        return subjectRepo.findAll();
    }

    public Optional<Subject> getSubjectByCourseCode(String courseCode) {
        return subjectRepo.findByCourseCode(courseCode);
    }

    public Subject createSubject(Subject subject, String roll) {
        User user = userRepo.findById(roll)
                .orElseThrow(() -> new RuntimeException("User not found"));
        subject.setUser(user);
        return subjectRepo.save(subject);
    }

    public Subject updateSubject(String courseCode, Subject updatedSubject) {
        return subjectRepo.findByCourseCode(courseCode)
                .map(existingSubject -> {
                    existingSubject.setName(updatedSubject.getName());
                    existingSubject.setCredits(updatedSubject.getCredits());
                    // Optionally update user only if needed
                    // existingSubject.setUser(updatedSubject.getUser());
                    return subjectRepo.save(existingSubject);
                })
                .orElseThrow(() -> new RuntimeException("Subject not found"));
    }

    public void deleteSubject(String courseCode) {
        subjectRepo.findByCourseCode(courseCode)
                .ifPresentOrElse(
                    subjectRepo::delete,
                    () -> {
                        throw new RuntimeException("Subject not found");
                    }
                );
    }
}
