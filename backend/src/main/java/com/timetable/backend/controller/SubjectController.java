package com.timetable.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.timetable.backend.model.Subject;
import com.timetable.backend.service.SubjectService;

@RestController
@RequestMapping("/subjects")
@CrossOrigin(origins = "http://localhost:5173")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping("/{courseCode}")
    public ResponseEntity<Subject> getSubjectByCourseCode(@PathVariable String courseCode) {
        return subjectService.getSubjectByCourseCode(courseCode)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create/{roll}")
    public Subject createSubject(@RequestBody Subject subject, @PathVariable String roll) {
        return subjectService.createSubject(subject, roll);
    }

    @PutMapping("/{courseCode}")
    public ResponseEntity<Subject> updateSubject(@PathVariable String courseCode, @RequestBody Subject subject) {
        try {
            return ResponseEntity.ok(subjectService.updateSubject(courseCode, subject));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{courseCode}")
    public ResponseEntity<Void> deleteSubject(@PathVariable String courseCode) {
        subjectService.deleteSubject(courseCode);
        return ResponseEntity.noContent().build();
    }
}
