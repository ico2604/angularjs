package com.java.ng.service;

import java.util.HashMap;

public interface BoardServiceInterface {

	public HashMap<String, Object> addBoard(HashMap<String, Object> param);
	public HashMap<String, Object> listBoard(HashMap<String, Object> param);
	public HashMap<String, Object> oneBoard(HashMap<String, Object> param);
	public HashMap<String, Object> upBoard(HashMap<String, Object> param);
	public HashMap<String, Object> delBoard(HashMap<String, Object> param);
	
}
