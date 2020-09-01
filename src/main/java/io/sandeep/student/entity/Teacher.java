package io.sandeep.student.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@ToString
@EqualsAndHashCode()
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name = "teacher")
public class Teacher implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", insertable = false, nullable = false)
  private Long id;

  @Column(name="name")
  private String name;

  @Column(name="address")
  private String address;

  @Column(name="phone")
  private String phone;

  @Column(name="date_of_birth")
  private LocalDate dateOfBirth;

  @Column(name="joining_date")
  private LocalDate joiningDate;

  @Column(name="subject")
  private String subject;

  @Column(name="class_teacher")
  private boolean classTeacher;

  @Column(name="class_teacher_of_class")
  private String classTeacherOfClass;
}
