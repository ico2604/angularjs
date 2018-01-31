// 앵귤라 모듈 만들기
var app = angular.module("myApp", ["ngRoute","Page1Controller","Page3Controller"]);
		
// 라우터 처리 부분 (싱글 페이지 적용)
app.config(function($routeProvider){
	$routeProvider.when("/main", {
		templateUrl : "resources/html/main.html"
	   ,controller : "testController"
	}).when("/signUp", {
		templateUrl : "resources/html/signUp.html"
	}).when("/login", {
		templateUrl : "resources/html/login.html"
	}).when("/page1", {
		templateUrl : "resources/html/page1.html"
	   ,controller : "page1Controller"
	}).when("/page1/:name", {
		templateUrl : "resources/html/page1Detail.html"
	   ,controller : "page1Controller"
	}).when("/page2", {
		templateUrl : "resources/html/page2.html"
	}).when("/page3/:page", {
		templateUrl : function(param){
			var baseUrl = {
				"L":"resources/html/page3.html",
				"D":"resources/html/page3-D.html",
				"I":"resources/html/page3-I.html",
				"U":"resources/html/page3-I.html"
			};
			var page = param.page.toUpperCase();
			if(baseUrl[page] == undefined){
				// 에러를 처리 할것.
				return;
			}
			return baseUrl[page];
		}
	   ,controller : "page3Controller"
	}).otherwise({redirectTo: "/main"});
});

// 앵귤라에서 사용할 전역 변수 선언 하는 곳?
app.run(function($rootScope, $http){
	$rootScope.navUrl = "resources/html/nav.html";
	$rootScope.title = 'Hello Angular!';
	$rootScope.no = 0;
	
	$rootScope.user = {
		email : "",
		pw : ""
	};
	$rootScope.signUp = function(){
		$http.post("addUser", "", {params: $rootScope.user})
		     .then(function(result){ // 성공하면 오는 곳
				console.log(result);
				if(result.data.status == 1){
		    		alert("회원 가입을 축하드립니다.");
		    		location.href = "#!/login";
		    	} else {
		    		alert("오류가 발생하여 다음에 다시 시도하세요.");
		    	}
			 }, function(result){ // 실패(오류) 하면 오는 곳
				console.log(result);
		 });
	}
	$rootScope.login = function(){
		$http.post("login", "", {params: $rootScope.user})
		     .then(function(result){ // 성공하면 오는 곳
				if(result.data.no == undefined){
					alert("모든건 너의 잘못이야.");
				} else {
					$rootScope.user = result.data;
					location.href = "#!/page2"
				}
			 }, function(result){ // 실패(오류) 하면 오는 곳
				console.log(result);
		 });
	}
	
	$rootScope.upUser = function(){
		$http.post("upUser", "", {params: $rootScope.user})
		     .then(function(result){ // 성공하면 오는 곳
		    	if(result.data.status == 1){
		    		alert("회원 정보가 완료 되었습니다.");
		    		location.href = "#!/main";
		    	} else {
		    		alert("오류가 발생하여 다음에 다시 시도하세요.");
		    	}
			 }, function(result){ // 실패(오류) 하면 오는 곳
				console.log(result);
		 });
	}
	
	$rootScope.out = function(){
		$http.post("out", "", {params: $rootScope.user})
		     .then(function(result){ // 성공하면 오는 곳
		    	if(result.data.status == 1){
		    		alert("다음에 잘 부탁드립니다. 또 오세요!");
		    		$rootScope.user = {};
		    		location.href = "#!/main";
		    	} else {
		    		alert("오류가 발생하여 다음에 다시 시도하세요.");
		    	}
			 }, function(result){ // 실패(오류) 하면 오는 곳
				console.log(result);
		 });
	}
});

// 앵귤라에서 서비스 만들기.
app.factory("ListService", function(){
	var data = {
			page1 : [
				{name: "위너", check: true},
				{name: "빅뱅", check: false},
				{name: "세븐", check: false},
				{name: "싸이", check: true}
			]
	};
	
	return data;
//	var deffered = $q.defer();
//	var data = [];
//	var listService = {};
//	
//	listService.async = function() {
//		$http.get("?")
//		     .success(function(result){
//		    	data = result;
//		    	deffered.resolve();
//		     });
//		
//		return deffered.promise;
//	}
//	
//	listService.data = function(){ return data; }
//	
//	return listService;
});




