package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.dao.DaoInterface;

@Service
public class BoardService implements BoardServiceInterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "board";
	private HashMap<String, Object> result;
	private DaoBean bean;
	private boolean check;
	
	@Override
	public HashMap<String, Object> addBoard(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		check = true;
		
		if(null==param.get("contents") 
		   || ("").equals(param.get("contents"))){
			result.put("msgCode", "F");
			result.put("msg", "내용을 입력해 주세요.");
			check = false;
		}
		
		if(null==param.get("title") 
		   || ("").equals(param.get("title"))){
			result.put("msgCode", "F");
			result.put("msg", "제목을 입력해 주세요.");
			check = false;
		}
		
		if(check){
			bean = new DaoBean("Insert", ns+".insert", param);
			result.put("status", di.dao(bean));
			result.put("msgCode", "S");
		}		
		
		return result;
	}

	@Override
	public HashMap<String, Object> listBoard(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".selectList", param);
		result.put("list", di.dao(bean));
		return result;
	}

	@Override
	public HashMap<String, Object> oneBoard(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectOne", ns+".selectOne", param);
		result =  (HashMap<String, Object>) di.dao(bean);
		return result;
	}

	@Override
	public HashMap<String, Object> upBoard(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		check = true;
		
		if(null==param.get("contents") 
		   || ("").equals(param.get("contents"))){
			result.put("msgCode", "F");
			result.put("msg", "내용을 입력해 주세요.");
			check = false;
		}
		
		if(null==param.get("title") 
		   || ("").equals(param.get("title"))){
			result.put("msgCode", "F");
			result.put("msg", "제목을 입력해 주세요.");
			check = false;
		}
		
		if(check){
			bean = new DaoBean("Update", ns+".update", param);
			result.put("status", di.dao(bean));
			result.put("msgCode", "S");
		}
		return result;
	}

	@Override
	public HashMap<String, Object> delBoard(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Update", ns+".delete", param);
		result.put("status", di.dao(bean));
		return result;
	}

}
