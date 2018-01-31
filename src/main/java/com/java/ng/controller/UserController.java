package com.java.ng.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.TestServiceInterface;
import com.java.ng.service.UserServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class UserController {
	
	@Autowired
	UserServiceInterface usi;
	
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public ModelAndView addUser(HttpServletRequest req){
		return HttpUtil.returnJson(usi.addUser(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login(HttpServletRequest req){
		return HttpUtil.returnJson(usi.login(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/upUser", method = RequestMethod.POST)
	public ModelAndView upUser(HttpServletRequest req){
		return HttpUtil.returnJson(usi.upUser(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/out", method = RequestMethod.POST)
	public ModelAndView out(HttpServletRequest req){
		return HttpUtil.returnJson(usi.out(HttpUtil.paramMap(req)));
	}
}
