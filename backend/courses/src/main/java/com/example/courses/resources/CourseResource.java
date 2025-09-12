package com.example.courses.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.courses.entities.Course;
import com.example.courses.services.CourseService;

@RestController
@RequestMapping(value = "/courses")
public class CourseResource {
	@Autowired
	CourseService courseService;
	
	@GetMapping
	public ResponseEntity<List<Course>> findAll() {
		
		return ResponseEntity.ok().body(courseService.findAll());
	}
}
