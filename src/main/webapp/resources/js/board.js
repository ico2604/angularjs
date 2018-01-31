var app = angular.module("Board",[]);

app.controller("board", function($rootScope, $scope){
	$rootScope.navEvnet();
	$rootScope.loginCheck();
	$scope.dataSource = {
		head:["#","Name","Email"],
		list:[
		{no : "3", name : "John Doe", email : "john@example.com"},
		{no : "2", name : "Mary Moe", email : "mary@example.com"},
		{no : "1", name : "woosauk", email : "ico2604@naver.com"}
		]
	};

});