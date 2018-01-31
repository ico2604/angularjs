package com.java.ng.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.util.HttpUtil;


@Controller
public class SecurityController {
	
	private static final Logger logger = LoggerFactory.getLogger(SecurityController.class);
	private String page;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		if(!(auth instanceof AnonymousAuthenticationToken)){
			UserDetails user = (UserDetails) auth.getPrincipal();
			logger.info("UserID : " + user.getUsername());
			page="redirect:/site";
		}else {
			logger.info("Not Login");
			page="login";
		}
		return page;
	}
	@RequestMapping(value = "/loginCheck", method = RequestMethod.POST)
	public ModelAndView loginCheck() {
		HashMap<String, Object> result = new HashMap<String, Object>();
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		if((auth instanceof AnonymousAuthenticationToken)){
			//로그인이 안되있는 상태
			result.put("status", 0);
		}else {
			UserDetails user = (UserDetails) auth.getPrincipal();
			//로그인이 되있는 상태
			result.put("status", 1);
			result.put("msg", user.getAuthorities().toString());//status가 1일때 룰을 받아온다.
		}
		return HttpUtil.returnJson(result);
	}
}
