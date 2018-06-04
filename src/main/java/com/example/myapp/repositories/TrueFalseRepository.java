package com.example.myapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.myapp.model.TrueFalseQuestion;

public interface TrueFalseRepository 
	extends CrudRepository<TrueFalseQuestion, Integer>{

}
