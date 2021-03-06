package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.model.User;
import com.interfin.backend.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserRepository userRepository;


    @GetMapping("")
    public List<User> getUsers() {
        List<User> list = userRepository.findAll();

        return list;
    }

}
