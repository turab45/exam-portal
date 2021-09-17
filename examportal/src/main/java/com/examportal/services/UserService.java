package com.examportal.services;

import com.examportal.entity.RoleEntity;
import com.examportal.entity.UserEntity;
import com.examportal.entity.UserRole;

import java.util.Set;

public interface UserService {
    public UserEntity create(UserEntity userEntity, Set<UserRole> userRoles);
}
