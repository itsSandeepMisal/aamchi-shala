package io.sandeep.student.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode(callSuper = false)
@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentDto {

  @JsonProperty
  private Long id;

  @JsonProperty
  private String name;

  @JsonProperty("rollNo")
  private int rollNo;

  @JsonProperty
  private int standard;

  @JsonProperty
  private String address;

  @JsonProperty
  private String phone;

  @JsonProperty("dateOfBirth")
  private LocalDate dateOfBirth;
}
