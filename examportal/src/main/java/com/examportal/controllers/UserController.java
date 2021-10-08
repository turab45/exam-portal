package com.examportal.controllers;

import com.examportal.entity.RoleEntity;
import com.examportal.entity.UserEntity;
import com.examportal.entity.UserRole;
import com.examportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/")
    public UserEntity create(@RequestBody UserEntity userEntity){
    	userEntity.setProfileImg("default.png");
    	userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
        Set<UserRole> userRoles = new HashSet<>();
        RoleEntity role1 = new RoleEntity();
        role1.setName("123");
        role1.setId(123);

        userRoles.add(new UserRole(userEntity, role1));

        return this.userService.create(userEntity, userRoles);
    }

    @GetMapping("/{username}")
    public UserEntity getUser(@PathVariable String username){
        return this.userService.getUserByName(username);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        this.userService.deleteUserById(id);
    }

    @PutMapping("/update")
    public UserEntity updateUser(@RequestBody UserEntity user){
        return this.userService.updateUser(user);
    }
}
