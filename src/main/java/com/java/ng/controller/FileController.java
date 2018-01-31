package com.java.ng.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.FileServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class FileController {
	
	@Autowired
	FileServiceInterface fsi;
	
	@RequestMapping(value="FileUpload", method = RequestMethod.POST)
	public ModelAndView FileUpload(@RequestParam("file") MultipartFile[] file, HttpServletRequest req){
		return  HttpUtil.returnJson(fsi.fileOutput(file, req));
	}
}
