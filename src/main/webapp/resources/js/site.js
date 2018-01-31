var app = angular.module("Site", ["ngRoute","Home","Board","Chart","About","SignUp","Login","UpUser"]);
		
// 라우터 처리 부분 (싱글 페이지 적용)
app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "resources/views/index.html",
		controller : "home"
	}).when("/board", {
		templateUrl : "resources/views/board.html",
		controller : "board"
	}).when("/chart", {
		templateUrl : "resources/views/chart.html",
		controller : "chart"
	}).when("/about", {
		templateUrl : "resources/views/about.html",
		controller : "about"
	}).when("/signUp", {
		templateUrl : "resources/views/signUp.html",
		controller : "signUp"
	}).when("/login", {
		templateUrl : "resources/views/login.html",
		controller : "login"
	}).when("/upUser", {
		templateUrl : "resources/views/upUser.html",
		controller : "upUser"
	}).otherwise({redirectTo: "/home"});
});
app.run(function($rootScope, $http, LoginService){
	$rootScope.nav = 'resources/views/nav.html';
	$rootScope.footer = 'resources/views/footer.html';
	$rootScope.navEvnet = function(){
		$rootScope.navDis = location.hash;
	};
	$rootScope.loginFlag = true;
	$rootScope.loginCheck = function(){
		LoginService.async().then(function(){
			var result = LoginService.data();
			if(result.data.status == 0){
				location.href = "#!/login"
			}else if(result.data.msg == "ROLE_USER") {
				location.href = "#!/home";
			}
			$rootScope.loginFlag = false;
			console.log(result.data);
		});
	};
});
app.factory("FileService", function($q, $http){
	var deffered = $q.defer();
	var result = [];
	var fileService = {};
	
	fileService.async = function(url, formData,param) {
		$http.post(url,formData, {
			headers : {"Content-Type" : undefined},
			params : param
		}).then(data => {
	          result = data;
	          deffered.resolve();
	       }, data =>{
	    	   result = data;
	    	   deffered.resolve();
		});
		return deffered.promise;
	}
	
	fileService.data = function(){ return result; }
	
	return fileService;
});
app.factory("LoginService", function($q, $http){
	var deffered = $q.defer();
	var result = [];
	var loginService = {};
	
	loginService.async = function() {
		$http.post("loginCheck").then(data => {
	          result = data;
	          deffered.resolve();
	       }, data =>{
	    	   result = data;
	    	   deffered.resolve();
		});
		return deffered.promise;
	}
	
	loginService.data = function(){ return result; }
	
	return loginService;
});

