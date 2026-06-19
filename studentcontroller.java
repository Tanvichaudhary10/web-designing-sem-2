package com.example.student_rest_api;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {

        return new Student(
                101,
                "Rahul",
                "Computer Science"
        );
    }

    @PostMapping("/addStudent")
    public Student addStudent(
            @RequestBody Student student) {

        return student;
    }
}
