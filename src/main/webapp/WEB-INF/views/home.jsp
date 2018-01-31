<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html data-ng-app="myApp">
<head>
	<title>{{title}}</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script>
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script>
	
	<script type="text/javascript" src="resources/js/app.js"></script>
	<script type="text/javascript" src="resources/js/mainController.js"></script>
	<script type="text/javascript" src="resources/js/page1Controller.js"></script>
	<script type="text/javascript" src="resources/js/page3Controller.js"></script>
	
	<link rel="stylesheet" href="resources/css/page1.css">
</head>
<body>
<div data-ng-include="navUrl"></div>

<div class="container" data-ng-view></div>

<footer class="text-center">
  <p>Copyright(C) 2015 GooDee ALL Right Reserved.</p> 
</footer>
</body>
</html>
