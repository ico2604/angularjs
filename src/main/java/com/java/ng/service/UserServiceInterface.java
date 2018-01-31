package com.java.ng.service;

import java.util.HashMap;

public interface UserServiceInterface {
	
	public HashMap<String, Object> addUser(HashMap<String, Object> param);
	public HashMap<String, Object> login(HashMap<String, Object> param);
	public HashMap<String, Object> upUser(HashMap<String, Object> param);
	public HashMap<String, Object> out(HashMap<String, Object> param);
	
}
