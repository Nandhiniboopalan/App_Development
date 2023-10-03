package com.example.newproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.newproject.entity.AppEntity;
import com.example.newproject.repository.AppRepository;

@Service
public class Sevice {
	@Autowired
	AppRepository f1;
	
	
	public List<AppEntity> getdetails(){
		return f1.findAll();
	}
	
	public AppEntity getDetailsById(@PathVariable Long id) {
		return f1.getById(id);
	}
	
	public String delete (@PathVariable("id") Long id) {
		f1.deleteById(id);
		return "deleted successfully";
	}
	
	
	public String postDetails(@RequestBody AppEntity f) {
	    f1.save(f);
	    return "posted successfully";
	}
}
