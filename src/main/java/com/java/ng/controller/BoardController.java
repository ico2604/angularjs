package com.java.ng.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.BoardServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class BoardController {
	
	@Autowired
	BoardServiceInterface bsi;

	@RequestMapping(value = "/addBoard", method = RequestMethod.POST)
	public ModelAndView addBoard(HttpServletRequest req){
		return HttpUtil.returnJson(bsi.addBoard(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/listBoard", method = RequestMethod.POST)
	public ModelAndView listBoard(HttpServletRequest req){
		return HttpUtil.returnJson(bsi.listBoard(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/oneBoard", method = RequestMethod.POST)
	public ModelAndView oneBoard(HttpServletRequest req){
		return HttpUtil.returnJson(bsi.oneBoard(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/updateBoard", method = RequestMethod.POST)
	public ModelAndView updateBoard(HttpServletRequest req){
		return HttpUtil.returnJson(bsi.upBoard(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/deleteBoard", method = RequestMethod.POST)
	public ModelAndView deleteBoard(HttpServletRequest req){
		return HttpUtil.returnJson(bsi.delBoard(HttpUtil.paramMap(req)));
	}
}
