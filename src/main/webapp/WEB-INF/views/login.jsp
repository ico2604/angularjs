<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>login</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
	<form action="security_check" method="post">		
  		  <h1>Login</h1>
	  			<div class="form-group">
	    		<label for="userId">아이디</label>
	   		 	<input type="text" class="form-control" name="userId" placeholder="아이디를 입력하세요" data-ng-model="user.email">
	 		 </div>
	  		 <div class="form-group">
	   			 <label for="userPw">암호</label>
	    		 <input type="password" class="form-control" name="userPw" placeholder="암호" data-ng-model="user.pw">
	 		</div>
	  		<button type="submit" class="btn btn-success">로그인</button>
			<a href="/web/signUp">회원가입</a>
		
	</form>
	</div>
</body>
</html>