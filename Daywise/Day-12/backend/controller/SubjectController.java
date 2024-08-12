package com.timetable.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.timetable.backend.model.Subject;
import com.timetable.backend.service.SubjectService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subs")
public class SubjectController {
    @Autowired
    private SubjectService sservice;

    @GetMapping("/getsubs")
    public List<Subject> getSubs() {
        return sservice.getSubs();
    }

    @PostMapping("/add")
    public Subject addSubs(@RequestBody Subject sub) {
        return sservice.addSubs(sub);
    }

    @DeleteMapping("/delete/{sid}")
    public String deleteSub(@PathVariable Long sid) {
        return sservice.deleteSub(sid);
    }

    @GetMapping("/find/{sid}")
    public Optional<Subject> getSubBySid(@PathVariable Long sid) {
        return sservice.getSubBySid(sid);
    }

    @PutMapping("/update/{sid}")
    public Subject updateSub(@PathVariable Long sid, @RequestBody Subject subDetails) {
        return sservice.updateSub(sid, subDetails);
    }
}
