package com.examportal.repositories;

import com.examportal.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
}
