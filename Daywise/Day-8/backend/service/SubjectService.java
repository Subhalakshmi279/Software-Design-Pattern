package com.timetable.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timetable.backend.model.Subject;
import com.timetable.backend.repo.SubjectRepo;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepo srepo;

    public List<Subject> getSubs() {
        return srepo.findAll();
    }

    public Subject addSubs(Subject sub) {
        return srepo.save(sub);
    }

    public String deleteSub(Long sid) {
        srepo.deleteById(sid);
        return "Subject deleted successfully";
    }

    public Optional<Subject> getSubBySid(Long sid) {
        return srepo.findById(sid);
    }

    public Subject updateSub(Long sid, Subject subDetails) {
        Subject sub = srepo.findById(sid).orElse(null);
        if (sub != null) {
            sub.setTitle(subDetails.getTitle());
            sub.setCredit(subDetails.getCredit());
            sub.setUser(subDetails.getUser());
            srepo.save(sub);
        }
        return sub;
    }
}
