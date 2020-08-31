package io.sandeep.student.service;

import io.sandeep.student.mapper.StudentMapper;
import java.util.List;
import java.util.Optional;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.sandeep.student.entity.Student;
import io.sandeep.student.entity.StudentDto;
import io.sandeep.student.repository.StudentRepo;

@Service
@Log4j2
public class StudentServiceImpl implements StudentService {

	private static final StudentMapper STUDENT_MAPPER = StudentMapper.STUDENT_MAPPER;

	@Autowired
	private StudentRepo studentRepo;

	@Override
	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}

	@Override
	public Student getStudent(Long id) {
		Optional<Student> optional = studentRepo.findById(id);
		if(!optional.isPresent()) {
			log.error("Student not found.");
			throw new NullPointerException("Not Found");
		}
		return optional.get();
	}

	@Override
	public Student addUpdateStudent(StudentDto student) {
		return studentRepo.save(STUDENT_MAPPER.toEntity(student));
	}

	@Override
	public void deleteStudent(Long id) {
		// TODO Auto-generated method stub
		studentRepo.deleteById(id);
	}
}
