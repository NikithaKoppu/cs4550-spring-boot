package com.example.myapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.myapp.model.MultipleChoiceQuestion;

public interface MultipleChoiceRepository 
extends CrudRepository<MultipleChoiceQuestion, Integer>{

}
