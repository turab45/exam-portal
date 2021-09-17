package com.examportal.services.impl;

import com.examportal.entity.UserEntity;
import com.examportal.entity.UserRole;
import com.examportal.repositories.RoleRepository;
import com.examportal.repositories.UserRepository;
import com.examportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserEntity create(UserEntity userEntity, Set<UserRole> userRoles) {
        System.out.println(userEntity);
        UserEntity user = this.userRepository.findByEmail(userEntity.getEmail());
        if (user != null){
            System.out.println("User with the same email already exists.");
            return null;
        }else{
            for (UserRole role: userRoles){
                this.roleRepository.save(role.getRole());
            }

            userEntity.getUserRoles().addAll(userRoles);

            user = userRepository.save(userEntity);

        }
        return user;
    }

    @Override
    public UserEntity getUserByName(String username) {
        return this.userRepository.findByName(username);
    }

    @Override
    public void deleteUserById(Integer id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public UserEntity updateUser(UserEntity userEntity) {
        return this.userRepository.save(userEntity);
    }
}
