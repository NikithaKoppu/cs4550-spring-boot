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
import com.example.myapp.model.Exam;
import com.example.myapp.model.FilledInBlankQuestion;
import com.example.myapp.model.Lesson;
import com.example.myapp.model.MultipleChoiceQuestion;
import com.example.myapp.model.Question;
import com.example.myapp.model.TrueFalseQuestion;
import com.example.myapp.model.Widget;
import com.example.myapp.repositories.ExamRepository;
import com.example.myapp.repositories.FilledInBlankRepository;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.MultipleChoiceRepository;
import com.example.myapp.repositories.QuestionRepository;
import com.example.myapp.repositories.TrueFalseRepository;


@RestController
@CrossOrigin(origins = "*")
public class ExamService {
	@Autowired
	QuestionRepository quesRepo;
	@Autowired
	ExamRepository examRepository;
	@Autowired
	LessonRepository lessonRepo;
	@Autowired
	TrueFalseRepository trueFalseRepository;
	@Autowired
	MultipleChoiceRepository multiRepo;
	@Autowired
	FilledInBlankRepository filledRepo;

	@DeleteMapping("/api/exam/{eId}")
	public void deleteExam(@PathVariable("eId") int id) {
		examRepository.deleteById(id);
	}

	@GetMapping("/api/exam")
	public List<Exam> getAllExams() {
		return (List<Exam>) examRepository.findAll();
	}

	@GetMapping("/api/exam/{eId}")
	public Exam findExamById(@PathVariable("eId") int eId) {
		Optional<Exam> optionalExam = examRepository.findById(eId);
		if (optionalExam.isPresent()) {
			return optionalExam.get();
		} else {
			return null;
		}
	}
	
	@PostMapping("/api/lesson/{lId}/exam")
	public Exam createExam(@PathVariable("lId") int lId, 
			@RequestBody Exam newExam) {
		Optional<Lesson> lData = lessonRepo.findById(lId);
		if (lData.isPresent()) {
			Lesson lesson = lData.get();
			newExam.setLesson(lesson);
			return examRepository.save(newExam);
		} else {
			return null;
		}
	}

	@GetMapping("/api/lesson/{lId}/exam")
	public List<Exam> findAllExamsForLesson(@PathVariable("lId") int lId) {
		List<Exam> result = new ArrayList();
		Optional<Lesson> lData = lessonRepo.findById(lId);
		if (lData.isPresent()) {
			Lesson les = lData.get();
			List<Widget> wList = les.getWidgets();
			for (Widget w : wList) {
				if (w instanceof Exam) {
					result.add((Exam) w);
				}
			}
			return result;
		} else {
			return null;
		}
	}
	
	@DeleteMapping("/api/question/{qId}")
	public void deleteQuestion(@PathVariable("qId") int id) {
		quesRepo.deleteById(id);
	}
	
	@PostMapping("/api/exam/{eId}/essay")
	public Question createEssayForExam(@PathVariable("eId") int eId, 
			@RequestBody Question newEssay) {
		Optional<Exam> eData = examRepository.findById(eId);
		if (eData.isPresent()) {
			Exam exam = eData.get();
			newEssay.setExam(exam);
			return quesRepo.save(newEssay);
		} else {
			return null;
		}
	}
	
	@PostMapping("/api/exam/{eId}/choice")
	public MultipleChoiceQuestion createMCForExam(@PathVariable("eId") int eId, 
			@RequestBody MultipleChoiceQuestion newMC) {
		Optional<Exam> eData = examRepository.findById(eId);
		if (eData.isPresent()) {
			Exam exam = eData.get();
			newMC.setExam(exam);
			return multiRepo.save(newMC);
		} else {
			return null;
		}
	}
	
	@PostMapping("/api/exam/{eId}/blanks")
	public FilledInBlankQuestion createFillInForExam(@PathVariable("eId") int eId, 
			@RequestBody FilledInBlankQuestion newFill) {
		Optional<Exam> eData = examRepository.findById(eId);
		if (eData.isPresent()) {
			Exam exam = eData.get();
			newFill.setExam(exam);
			return filledRepo.save(newFill);
		} else {
			return null;
		}
	}
	
	@PostMapping("/api/exam/{eId}/truefalse")
	public TrueFalseQuestion createTFForExam(@PathVariable("eId") int eId, 
			@RequestBody TrueFalseQuestion newTF) {
		Optional<Exam> eData = examRepository.findById(eId);
		if (eData.isPresent()) {
			Exam exam = eData.get();
			newTF.setExam(exam);
			return trueFalseRepository.save(newTF);
		} else {
			return null;
		}
	}
	
	
	
	@GetMapping("/api/multi/{questionId}")
	public MultipleChoiceQuestion findMultiQuestionById(@PathVariable("questionId") int questionId) {
		Optional<MultipleChoiceQuestion> optional = multiRepo.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@GetMapping("/api/truefalse/{questionId}")
	public TrueFalseQuestion findTrueFalseQuestionById(@PathVariable("questionId") int questionId) {
		Optional<TrueFalseQuestion> optional = trueFalseRepository.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/filled/{questionId}")
	public FilledInBlankQuestion findFilledInQuestionById(@PathVariable("questionId") int questionId) {
		Optional<FilledInBlankQuestion> optional = filledRepo.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/multichoice/{questionId}")
	public MultipleChoiceQuestion findMCQuestionById(@PathVariable("questionId") int questionId) {
		Optional<MultipleChoiceQuestion> optional = multiRepo.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/exam/{examId}/question")
	public List<Question> findAllQuestionsForExam(@PathVariable("examId") int examId) {
		Optional<Exam> optionalExam = examRepository.findById(examId);
		if(optionalExam.isPresent()) {
			Exam exam = optionalExam.get();
			List<Question> questions = exam.getQuestions();
			int count = questions.size();
			return questions;
		}
		return null;
	}
}
