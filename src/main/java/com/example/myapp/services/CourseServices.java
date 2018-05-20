package com.example.myapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.myapp.model.Course;
import com.example.myapp.repositories.CourseRepository;

public class CourseServices {
	@Autowired
	CourseRepository courseRepository;	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}

}
