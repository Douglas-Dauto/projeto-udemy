package com.example.courses.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.courses.entities.Course;
import com.example.courses.repositories.CourseRepository;

@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	
	public List<Course> findAll() {
		
		return courseRepository.findAll();
	}
}
