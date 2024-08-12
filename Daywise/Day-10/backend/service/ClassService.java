package com.timetable.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timetable.backend.model.Class;
import com.timetable.backend.repo.ClassRepo;

@Service
public class ClassService {
    @Autowired
    private ClassRepo crepo;

    public List<Class> getClasses() {
        return crepo.findAll();
    }

    public Class addClass(Class clas) {
        return crepo.save(clas);
    }

    public String deleteClass(Long cid) {
        crepo.deleteById(cid);
        return "Class Deleted " + cid;
    }

    public Optional<Class> getClassByCid(Long cid) {
        return crepo.findByCid(cid);
    }

    public Class editClassDetails(Long cid, Class classDetails) {
        Optional<Class> existingClassOpt = crepo.findByCid(cid);
        if (existingClassOpt.isPresent()) {
            Class existingClass = existingClassOpt.get();
            existingClass.setDept(classDetails.getDept());
            existingClass.setSection(classDetails.getSection());
            return crepo.save(existingClass);
        } else {
            throw new RuntimeException("Class with ID " + cid + " not found");
        }
    }
}
