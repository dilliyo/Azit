package com.ldi.azit.nav;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NavServiceImpl implements NavService{
	
	@Autowired
	private NavMapper mapper;
	
	@Override
	public List<Nav> getNav() {
		return mapper.getNav();
	}
	/*
	@Override
	public boolean addNav(Nav n) { 
		return mapper.addNav(n) == 1 ? true : false;
	}
	
	@Override
	public boolean updateNav(Nav n) {
		return mapper.updateNav(n) == 1 ? true : false;
	}

	@Override
	public boolean deleteNav(Nav n) {
		return mapper.deleteNav(n) == 1 ? true : false;
	}
	*/
}
