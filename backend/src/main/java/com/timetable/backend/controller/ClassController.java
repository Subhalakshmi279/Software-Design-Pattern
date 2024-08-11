package com.timetable.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.timetable.backend.model.Class;
import com.timetable.backend.service.ClassService;

@RestController
@RequestMapping("/classes")
public class ClassController {
    @Autowired
    private ClassService cservice;

    @GetMapping("/getclasses")
    public List<Class> getClasses() {
        return cservice.getClasses();
    }

    @PostMapping("/add")
    public Class addClass(@RequestBody Class clas) {
        return cservice.addClass(clas);
    }

    @DeleteMapping("/delete/{cid}")
    public String deleteClass(@PathVariable Long cid) {
        return cservice.deleteClass(cid);
    }

    @GetMapping("/getclass/{cid}")
    public Optional<Class> getClassByCid(@PathVariable Long cid) {
        return cservice.getClassByCid(cid);
    }

    @PutMapping("/edit/{cid}")
    public Class editClassDetails(@PathVariable Long cid, @RequestBody Class classDetails) {
        return cservice.editClassDetails(cid, classDetails);
    }
}
