package com.example.courses.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.courses.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
