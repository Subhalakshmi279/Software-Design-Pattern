package com.timetable.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.timetable.backend.model.Class;
import java.util.Optional;

public interface ClassRepo extends JpaRepository<Class, Long> {
    Optional<Class> findByCid(Long cid);
}
