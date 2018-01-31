package com.java.ng.dao;

import java.util.HashMap;

public interface TestDaoInterface {
	public HashMap<String, Object> test();
	public int addUser(HashMap<String, Object> param);
	public HashMap<String, Object> login(HashMap<String, Object> param);
	
	public int upUser(HashMap<String, Object> param);
	public int out(HashMap<String, Object> param);
}
