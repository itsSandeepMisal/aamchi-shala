package io.sandeep.student.service;

import io.sandeep.student.entity.Teacher;
import io.sandeep.student.entity.TeacherDto;
import java.util.List;

public interface TeacherService {
  List<Teacher> getAllTeachers();
  Teacher getTeacher(final Long id);
  Teacher addUpdateTeacher(final TeacherDto teacherDto);
  void deleteTeacher(final Long id);
}
