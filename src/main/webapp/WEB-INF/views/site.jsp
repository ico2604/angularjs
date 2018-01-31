<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html data-ng-app="Site">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script>
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script>
	<script type="text/javascript" src="resources/js/site.js"></script>
	<script type="text/javascript" src="resources/js/home.js"></script>
	<script type="text/javascript" src="resources/js/about.js"></script>
	<script type="text/javascript" src="resources/js/board.js"></script>
	<script type="text/javascript" src="resources/js/chart.js"></script>
	<script type="text/javascript" src="resources/js/login.js"></script>
	<script type="text/javascript" src="resources/js/signUp.js"></script>
	<script type="text/javascript" src="resources/js/upUser.js"></script>
<title>Site</title>
</head>
<body>

<div data-ng-include="nav"></div>

<div data-ng-view></div>

<div data-ng-include="footer"></div>

</body>
</html>