package io.sandeep.student.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@ToString
@EqualsAndHashCode()
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name = "student")
public class Student implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", insertable = false, nullable = false)
	private Long id;
	
	@Column(name="name", length=150)
	private String name;
	
	@Column(name="roll_no")
	private int rollNo;
	
	@Column(name="standard")
	private int standard;
	
	@Column(name="address", length=250)
	private String address;
	
	@Column(name="phone", length=150)
	private String phone;
	
	@Column(name="date_of_birth")
	private LocalDate dateOfBirth;
}


//CREATE TABLE public.student (
//		id bigserial NOT NULL,
//		name varchar(150) NULL,
//		roll_no bigint NULL,
//		standard bigint NULL,
//		address varchar(250) NULL,
//		phone varchar(150) NULL,
//		date_of_birth timestamptz NULL
//	);
