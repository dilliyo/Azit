package com.ldi.azit;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

	@RequestMapping(path = "/", method = {RequestMethod.POST,RequestMethod.GET})
    public String index(User u, ModelMap m, HttpSession session) {

		m.put("nav", navService.getNav());
		
		m.put("template", "content/main");
		m.put("key", "main");
		
		User signinUser = (User) session.getAttribute("check");
		
			if (signinUser != null){
			
				String Name = signinUser.getUserName();
				
				m.put("signOn", "signOn");
				m.put("userName", Name);
			}
        return "index";
    }
	
	@RequestMapping("/space")
    public String space(ModelMap m) {
		
		m.put("nav", navService.getNav());
		m.put("template", "content/space/space");
		
		
        return "index";
    }
	
	
// 회원가입	
	@RequestMapping("/signup")
	public String signup(ModelMap m) {
		
		m.put("nav", navService.getNav());
		
		m.put("template", "content/account/signup");
		m.put("key", "sign");
		
		return "index";
	}
	
	@RequestMapping(path = "/signup/pro", method = {RequestMethod.POST}, name = "signup")
    public String signuppro(User u, ModelMap m) {
		
		userService.signUp(u);
		
        return "redirect:/signin";
    }
	
	@RequestMapping(path = "/signup/emailCheck", method = {RequestMethod.POST}, name = "signup")
	@ResponseBody
    public long emailCheck(@RequestParam("userEmail") String userEmail) {
		
        return userService.emailCheck(userEmail);
    }

// 로그인	
	@RequestMapping("/signin")
    public String signin(ModelMap m) {
		
		m.put("nav", navService.getNav());
		m.put("template", "content/account/signin");
		m.put("key", "sign");
		
        return "index";
    }
	
	@RequestMapping(path="/signin/pro", method = {RequestMethod.POST}, name="signin")
	public String signinpro(String userEmail, String userPassword, HttpSession session){
		
		User signinUser = userService.signIn(userEmail,userPassword);
		log.debug(signinUser.getUserEmail());
		if(signinUser !=null) {
			session.setAttribute("check",signinUser);
			return "redirect:/";
		} else {
			return "redirect:/signin";
		}
	}
	
	 @RequestMapping(path="/signout", method = {RequestMethod.GET})
	    public String logout(HttpSession session) {
	        session.removeAttribute("check");
	 
	        return "redirect:/";
	 
	    }

	
	
}
