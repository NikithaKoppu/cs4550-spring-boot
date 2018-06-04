package com.example.myapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.myapp.model.FilledInBlankQuestion;

public interface FilledInBlankRepository 
extends CrudRepository<FilledInBlankQuestion, Integer>{

}
