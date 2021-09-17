package com.examportal.repositories;

import com.examportal.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    public UserEntity findByEmail(String email);
}
