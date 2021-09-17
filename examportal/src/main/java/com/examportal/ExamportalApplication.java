package com.examportal;

import com.examportal.entity.RoleEntity;
import com.examportal.entity.UserEntity;
import com.examportal.entity.UserRole;
import com.examportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamportalApplication {
	public static void main(String[] args) throws Exception {
		SpringApplication.run(ExamportalApplication.class, args);



	}


}
