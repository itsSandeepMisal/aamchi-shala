package io.sandeep.student.service;

import java.util.List;

import io.sandeep.student.entity.Student;
import io.sandeep.student.entity.StudentDto;

public interface StudentService {

	List<Student> getAllStudents();
	Student getStudent(final Long id);
	Student addUpdateStudent(final StudentDto student);
	void deleteStudent(final Long id);
}
