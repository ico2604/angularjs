package com.java.ng.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.TestServiceInterface;
import com.java.ng.util.HttpUtil;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	@RequestMapping(value = "/json", method = RequestMethod.POST)
	public ModelAndView json(ModelAndView mav) {
		
		HashMap<String, Object> data = new HashMap<String, Object>();
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String,Object>>();
		
		HashMap<String, Object> row = new HashMap<String, Object>();
		row.put("type", "facebook");
		row.put("on", "http://public.gudi.kr/gdj7/2017-09/20170908/img/icon_facebook.svg");
		row.put("off", "http://public.gudi.kr/gdj7/2017-09/20170908/img/icon_facebook_white.svg");
		list.add(row);
		
		row = new HashMap<String, Object>();
		row.put("type", "yellow");
		row.put("on", "http://public.gudi.kr/gdj7/2017-09/20170908/img/icon_yellow.svg");
		row.put("off", "http://public.gudi.kr/gdj7/2017-09/20170908/img/icon_yellow_white.svg");
		list.add(row);
		
		data.put("imgData", list);
		
		JSONObject jsonObject = new JSONObject();
		jsonObject = JSONObject.fromObject(JSONSerializer.toJSON(data));
		mav.addObject("message", jsonObject.toString());
		
		mav.setViewName("json");
		
		return mav;
	}
	
	@Autowired
	TestServiceInterface tsi;
	
	@RequestMapping(value = "/testDB", method = RequestMethod.POST)
	public ModelAndView testDB(){
		return HttpUtil.returnJson(tsi.test());
	}
	
}
