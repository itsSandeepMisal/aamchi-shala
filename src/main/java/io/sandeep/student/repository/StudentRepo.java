package io.sandeep.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.sandeep.student.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

}
