package com.example.newproject.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.newproject.entity.AppEntity;
@Repository
public interface AppRepository extends JpaRepository<AppEntity,Long> {


}
