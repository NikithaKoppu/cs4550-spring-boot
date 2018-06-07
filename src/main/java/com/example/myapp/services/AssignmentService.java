package com.example.myapp.services;

import java.util.ArrayList;
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

import com.example.myapp.model.Assignment;
import com.example.myapp.model.Course;
import com.example.myapp.model.Exam;
import com.example.myapp.model.Lesson;
import com.example.myapp.model.Module;
import com.example.myapp.model.Question;
import com.example.myapp.model.Widget;
import com.example.myapp.repositories.AssignmentRepository;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.QuestionRepository;

@RestController
@CrossOrigin(origins = "*")
public class AssignmentService {
	@Autowired
	AssignmentRepository assignmentRepository;
	@Autowired
	LessonRepository lessonRepo;

	@PostMapping("/api/lesson/{lId}/assignment")
	public Assignment createAssignment(@PathVariable("lId") int lId, 
			@RequestBody Assignment newAssignment) {
		Optional<Lesson> lData = lessonRepo.findById(lId);
		if (lData.isPresent()) {
			Lesson lesson = lData.get();
			newAssignment.setLesson(lesson);
			return assignmentRepository.save(newAssignment);
		} else {
			return null;
		}
	}
	
	
	@GetMapping("/api/lesson/{lId}/assignment")
	public List<Assignment> findAllAssignmentsForLesson(@PathVariable("lId") int lId) {
		List<Assignment> result = new ArrayList();
		Optional<Lesson> lData = lessonRepo.findById(lId);
		if (lData.isPresent()) {
			Lesson les = lData.get();
			List<Widget> wList = les.getWidgets();
			for (Widget w : wList) {
				if (w instanceof Assignment) {
					result.add((Assignment) w);
				}
			}
			return result;
		} else {
			return null;
		}
	}

	@DeleteMapping("/api/assignment/{aId}")
	public void deleteAssignment(@PathVariable("aId") int id) {
		assignmentRepository.deleteById(id);
	}

	@GetMapping("/api/assignment")
	public List<Assignment> getAllAssignments() {
		return (List<Assignment>) assignmentRepository.findAll();
	}

	@GetMapping("/api/assignment/{aId}")
	public Assignment findAssignmentById(@PathVariable("aId") int aId) {
		Optional<Assignment> optionalAssign = assignmentRepository.findById(aId);
		if (optionalAssign.isPresent()) {
			return optionalAssign.get();
		} else {
			return null;
		}
	}

}
