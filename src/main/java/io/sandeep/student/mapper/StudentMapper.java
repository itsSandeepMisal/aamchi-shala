package io.sandeep.student.mapper;

import io.sandeep.student.entity.Student;
import io.sandeep.student.entity.StudentDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StudentMapper {
  StudentMapper STUDENT_MAPPER = Mappers.getMapper(StudentMapper.class);

  Student toEntity(final StudentDto studentDto);
}