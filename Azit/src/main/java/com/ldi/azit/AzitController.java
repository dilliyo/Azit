package com.ldi.azit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.common.collect.ImmutableList;

import com.ldi.azit.nav.Nav;
import com.ldi.azit.nav.NavService;
import com.ldi.azit.nav.NavMapper;

import com.ldi.azit.user.User;
import com.ldi.azit.user.UserService;
import com.ldi.azit.user.UserMapper;

import lombok.extern.slf4j.Slf4j;





@Controller 
@Slf4j
public class AzitController {
	
    @Autowired
    private NavService navService;
    @Autowired
    private UserService userService;

	@RequestMapping("/")
    public String index(ModelMap m) {

		m.put("nav", navService.getNav());
		
		m.put("template", "content/main");
		m.put("key", "main");
        return "index";
    }
	
	@RequestMapping("/space")
    public String space(ModelMap m) {
		
		m.put("nav", navService.getNav());
		m.put("template", "content/space/space");
		
		
        return "index";
    }
	
	@RequestMapping("/signup")
	public String signup(ModelMap m) {
		
		m.put("nav", navService.getNav());
		
		m.put("template", "content/account/signup");
		m.put("key", "sign");
		
		return "index";
	}
	
	@RequestMapping(path = "/signup/pro", method = {RequestMethod.GET, RequestMethod.POST}, name = "signup")
    public String signuppro(User u, ModelMap m) {
		
		userService.signUp(u);
		
        return "redirect:/signin";
    }
	
	@RequestMapping("/signin")
    public String signin(ModelMap m) {
		
		m.put("nav", navService.getNav());
		m.put("template", "content/account/signin");
		m.put("key", "sign");
		
        return "index";
    }

	
	
}
