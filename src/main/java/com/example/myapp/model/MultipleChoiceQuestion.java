package com.example.myapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class MultipleChoiceQuestion extends Question {
	private String options;
	@Column(name = "CORRECT_OPTION", nullable = false)
	private int correctOption;
	public String getOptions() {
		return options;
	}
	public void setOptions(String options) {
		this.options = options;
	}
	public int getCorrectOption() {
		return correctOption;
	}
	public void setCorrectOption(int correctOption) {
		this.correctOption = correctOption;
	}
}
