package com.example.myapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.model.Course;
import com.example.myapp.repositories.CourseRepository;

@RestController
@CrossOrigin(origins = "*")
public class CourseService {
	@Autowired
	CourseRepository courseRepository;	
	
	@GetMapping("/api/course")
	public List<Course> findAllCourses() {
		return (List<Course>) courseRepository.findAll(); 
	}
	@GetMapping("/api/course/{courseId}")
	public Course findCourseById(@PathVariable("courseId") int id) {
		Optional<Course> courses = courseRepository.findById(id);
		if(courses.isPresent()) {
			Course course = courses.get();
			return course;
		}
		else {
			return null;
		}
	}

	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
			return courseRepository.save(course);
	}
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(@PathVariable("courseId") int id) {
		courseRepository.deleteById(id);
	}


}
