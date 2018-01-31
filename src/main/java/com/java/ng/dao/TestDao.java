package com.java.ng.dao;

import java.util.HashMap;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class TestDao implements TestDaoInterface {

	@Resource(name="sqlSession")
	SqlSession session;
	
	@Override
	public HashMap<String, Object> test() {
		return session.selectOne("sql.test");
	}

	@Override
	public int addUser(HashMap<String, Object> param) {
		return session.insert("sql.addUser", param);
	}

	@Override
	public HashMap<String, Object> login(HashMap<String, Object> param) {
		return session.selectOne("sql.login", param);
	}

	@Override
	public int upUser(HashMap<String, Object> param) {
		return session.update("sql.upUser", param);
	}

	@Override
	public int out(HashMap<String, Object> param) {
		return session.update("sql.out", param);
	}

}
