package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.dao.TestDaoInterface;

@Service
public class TestService implements TestServiceInterface {

	@Autowired
	TestDaoInterface tdi;
	
	@Override
	public HashMap<String, Object> test() {
		return tdi.test();
	}

	@Override
	public HashMap<String, Object> addUser(HashMap<String, Object> param) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", tdi.addUser(param));
		return result;
	}

	@Override
	public HashMap<String, Object> login(HashMap<String, Object> param) {
		return tdi.login(param);
	}

	@Override
	public HashMap<String, Object> upUser(HashMap<String, Object> param) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", tdi.upUser(param));
		return result;
	}

	@Override
	public HashMap<String, Object> out(HashMap<String, Object> param) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", tdi.out(param));
		return result;
	}

}
