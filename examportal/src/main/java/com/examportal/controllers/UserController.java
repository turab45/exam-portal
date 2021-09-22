package com.examportal.controllers;

import com.examportal.entity.RoleEntity;
import com.examportal.entity.UserEntity;
import com.examportal.entity.UserRole;
import com.examportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public UserEntity create(@RequestBody UserEntity userEntity){
        Set<UserRole> userRoles = new HashSet<>();
        RoleEntity role1 = new RoleEntity();
        role1.setName("!23");
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
