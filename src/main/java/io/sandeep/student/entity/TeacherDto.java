package io.sandeep.student.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode(callSuper = false)
@JsonIgnoreProperties(ignoreUnknown = true)
public class TeacherDto {

  @JsonProperty
  private Long id;

  @JsonProperty
  private String name;

  @JsonProperty("address")
  private String address;

  @JsonProperty("phone")
  private String phone;

  @JsonProperty("dateOfBirth")
  private LocalDate dateOfBirth;

  @JsonProperty("joiningDate")
  private LocalDate joiningDate;

  @JsonProperty("subject")
  private String subject;

  @JsonProperty("classTeacher")
  private boolean classTeacher;

  @JsonProperty("classTeacherOfClass")
  private String classTeacherOfClass;
}
