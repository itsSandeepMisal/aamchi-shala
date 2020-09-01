package io.sandeep.student.controller;

import io.sandeep.student.entity.Teacher;
import io.sandeep.student.entity.TeacherDto;
import io.sandeep.student.service.TeacherService;
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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/school/teacher", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeacherController {

  @Autowired
  private TeacherService teacherService;

  @RequestMapping("")
  public List<Teacher> getAllTeachers() {
    return teacherService.getAllTeachers();
  }

  @RequestMapping("/{id}")
  public Teacher getTeacher(@PathVariable Long id) {
    return teacherService.getTeacher(id);
  }

  @PostMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE)
  public Teacher addTeacher(@RequestBody final TeacherDto teacherDto) {
    return teacherService.addUpdateTeacher(teacherDto);
  }

  @PutMapping("")
  public Teacher updateTeacher(@RequestBody TeacherDto teacherDto) {
    return teacherService.addUpdateTeacher(teacherDto);
  }

  @DeleteMapping("/{id}")
  public void deleteTeacher(@PathVariable Long id) {
    teacherService.deleteTeacher(id);
  }
}
