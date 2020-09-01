package io.sandeep.student.service;

import io.sandeep.student.entity.Teacher;
import io.sandeep.student.entity.TeacherDto;
import io.sandeep.student.mapper.StudentMapper;
import io.sandeep.student.repository.TeacherRepo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {

  private static final StudentMapper STUDENT_MAPPER = StudentMapper.STUDENT_MAPPER;

  @Autowired
  private TeacherRepo teacherRepo;

  @Override
  public List<Teacher> getAllTeachers() {
    return teacherRepo.findAll();
  }

  @Override
  public Teacher getTeacher(Long id) {
    Optional<Teacher> optional = teacherRepo.findById(id);
    if(optional.isPresent()) {
      return optional.get();
    }
    return null;
  }

  @Override
  public Teacher addUpdateTeacher(TeacherDto teacherDto) {
    return teacherRepo.save(STUDENT_MAPPER.toTeacherEntity(teacherDto));
  }

  @Override
  public void deleteTeacher(Long id) {
    teacherRepo.deleteById(id);
  }
}
