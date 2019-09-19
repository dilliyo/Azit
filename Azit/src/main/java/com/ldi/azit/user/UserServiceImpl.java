package com.ldi.azit.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper mapper;
	
	@Override
	public List<User> getUser(){
		return mapper.getUser();
	}
	
	@Override
	public int signUp(User u) {
		return mapper.signUp(u);
	}

}
