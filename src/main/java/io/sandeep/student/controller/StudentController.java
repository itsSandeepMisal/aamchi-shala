package io.sandeep.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.sandeep.student.entity.Student;
import io.sandeep.student.entity.StudentDto;
import io.sandeep.student.service.StudentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/school/students", produces = MediaType.APPLICATION_JSON_VALUE)
public class StudentController {

	@Autowired
	private StudentService studentService;

	@RequestMapping("")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	@RequestMapping("/{id}")
	public Student getStudent(@PathVariable Long id) {
		return studentService.getStudent(id);
	}
	
	@PostMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Student addStudent(@RequestBody final StudentDto student) {
		return studentService.addUpdateStudent(student);
	}

	@PutMapping("")
	public Student updateCourse(@RequestBody StudentDto student) {
		return studentService.addUpdateStudent(student);
	}
	
	@DeleteMapping("/{id}")
	public void deleteCourse(@PathVariable Long id) {
		studentService.deleteStudent(id);
	}
}
