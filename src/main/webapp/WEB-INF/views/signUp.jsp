<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>회원가입 화면입니다.</h1>
	<form action="addUser" method="post">
		<p>이메일 : <input type="text" name="userID"></p>
		<p>비밀번호 : <input type="password" name="userPW"></p>
		<button type="submit">가입</button>
	</form>
</body>
</html>