package com.example.myapp.services;

import java.util.ArrayList;
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
	public User register(@RequestBody User user, HttpSession session) {
		if(repository.findUserByUsername(user.getUsername()) == null) {
			createUser(user);
			session.setAttribute("currentUser", user);
		}
		return user;
	}
	
	@GetMapping("/api.profile")
	public User profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		return currentUser;
	}
	
	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
 	
	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session) {
		if(repository.findUserByCredentials(user.getUsername(), user.getPassword()) != null) {
			session.setAttribute("currentUser", user);
			return user;
		}
		return null;
	}
	
	@GetMapping("/api/register")
	public User findUserByUsername(@PathVariable("username") String username) {
		Optional<User> data = repository.findUserByUsername(username);
		 if(data.isPresent()) {
			 return data.get();
		 }
		 return null;
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
			 user.setFirstName(newUser.getFirstName());
			 repository.save(user);
			 return user;
		 }
		 return null;
	}
}
