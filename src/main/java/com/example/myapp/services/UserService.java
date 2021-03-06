package com.example.myapp.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.model.User;
import com.example.myapp.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user) {
	User data = findUserByUsername(user.getUsername());
		if(data == null) {
			createUser(user);
			return user;
		}
		else {
		    return null;
		}
	}
 	
	@PostMapping("/api/login")
	public User login(@RequestBody User user) {
		Optional<User> data = repository.findUserByCredentials(user.getUsername(), user.getPassword());
		 if(data.isPresent()) {
			 return data.get();
		 }
		 else {
		 return null;
		 }
	}
	
	@GetMapping("/api/register/{username}")
	public User findUserByUsername(@PathVariable("username") String username) {
		Optional<User> data = repository.findUserByUsername(username);
		 if(data.isPresent()) {
			 return data.get();
		 }
		 else {
		 return null;
		 }
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) repository.findAll();
	}
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int userId) {
		 Optional<User> data = repository.findById(userId);
		 if(data.isPresent()) {
			 return data.get();
		 }
		 return null;
	}
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = repository.findById(userId);
		 if(data.isPresent()) {
			 User user = data.get();
			 user.setUsername(newUser.getUsername());
			 user.setPassword(newUser.getPassword());
			 user.setFirstName(newUser.getFirstName());
			 user.setLastName(newUser.getLastName());
			 user.setRole(newUser.getRole());
			 user.setEmail(newUser.getEmail());
			 user.setDateOfBirth(newUser.getDateOfBirth());
			 user.setPhone(newUser.getPhone());
			 repository.save(user);
			 return user;
		 }
		 return null;
	}
}
