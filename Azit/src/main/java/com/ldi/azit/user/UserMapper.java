package com.ldi.azit.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.context.annotation.Primary;


@Mapper
@Primary
public interface UserMapper {

	public List<User> getUser();
	
	public int signUp(User u);
	
	public long emailCheck(String userEmail);
	
	public User signIn(@Param("userEmail")String userEmail, @Param("userPassword")String userPassword);
	
	

	
}
