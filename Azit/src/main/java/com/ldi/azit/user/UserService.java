package com.ldi.azit.user;

import java.util.List;

public interface UserService {
	
	public List<User> getUser();
	
	public int signUp(User u);

}
