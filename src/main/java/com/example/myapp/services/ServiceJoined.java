package com.example.myapp.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.model.FilledInBlankQuestion;
import com.example.myapp.model.Question;
import com.example.myapp.model.TrueFalseQuestion;
import com.example.myapp.repositories.FilledInBlankRepository;
import com.example.myapp.repositories.QuestionRepository;
import com.example.myapp.repositories.TrueFalseRepository;

@RestController
public class ServiceJoined {
	@Autowired
	QuestionRepository baseRepo;
	@Autowired
	FilledInBlankRepository fillRepo;
	@Autowired
	TrueFalseRepository trueRepo;
	
	@GetMapping("/api/inheritance/joined/base")
	public Question createBaseQuestion() {
		Question q = new Question();
		q.setDescription("descriptions 123");
		q.setPoints(123);
		q.setTitle("title 123");
		return baseRepo.save(q);
	}
	@GetMapping("/api/inheritance/joined/fill")
	public FilledInBlankQuestion createFillQuestion() {
		FilledInBlankQuestion q = new FilledInBlankQuestion();
		q.setDescription("descriptions 234");
		q.setPoints(234);
		q.setTitle("title 234");
		q.setVariables("variables 234");
		return fillRepo.save(q);
	}
	@GetMapping("/api/inheritance/joined/true")
	public TrueFalseQuestion createTrueQuestion() {
		TrueFalseQuestion q = new TrueFalseQuestion();
		q.setDescription("descriptions 345");
		q.setPoints(345);
		q.setTitle("title 345");
		q.setIsTrue(true);
		return trueRepo.save(q);
	}
}
