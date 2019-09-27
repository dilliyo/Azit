package com.ldi.azit.user;

import java.util.List;

public interface UserService {
	
	public List<User> getUser();
	
	public int signUp(User u);
	
	public User signIn(String userEmail, String userPassword);
	
	public long emailCheck(String userEmail);

}
