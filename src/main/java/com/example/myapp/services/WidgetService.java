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
import com.example.myapp.model.Lesson;
import com.example.myapp.model.Widget;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class WidgetService {
	@Autowired
	WidgetRepository repository;
	LessonRepository lessonRepository;
	
	@GetMapping("/api/widget")
	public Iterable<Widget> findAllWidgets() {
		return repository.findAll();
	}
	
	@GetMapping("/api/lesson/{lessonId}/widget")
	public Iterable<Widget> findWidgetsByLesson(
			@PathVariable("lessonId") int lessonId) {
		Optional<Lesson> lData = lessonRepository.findById(lessonId);
		if(lData.isPresent()) {
			Lesson les = lData.get();
			return les.getWidgets();
		}
		else {
			return null;
		}
	}
	
	@PostMapping("/api/lesson/{lessonId}/widget")
	public Widget createWidget(
			@PathVariable("lessonId") int lessonId,
			@RequestBody Widget newWidget) {
			Optional<Lesson> lData = lessonRepository.findById(lessonId);
			if(lData.isPresent()) {
				Lesson les = lData.get();
				newWidget.setLesson(les);
				return repository.save(newWidget);
			}
			else {
				return null;
			}
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Widget findWidgetById(@PathVariable("widgetId") int id) {
		Optional<Widget> low = repository.findById(id);
		if(low.isPresent()) {
			return low.get();
		}
		else {
			return null;
		}
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/api/widget/save")
	public void saveAllWidgets(@RequestBody List<Widget> widgets) {
		repository.deleteAll();
		for(Widget widget: widgets) {
			repository.save(widget);
		}
	}
}
