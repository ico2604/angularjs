app.controller("testController", function($scope, $rootScope){
	$rootScope.navMenu = true;
	$scope.temp = "resources/html/main.html";
	$scope.array = [{name : "블핑"},
					{name : "레벳"},
					{name : "소시"},
					{name : "트둥"}];
	$scope.imgUrl = "https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
	
	$scope.selectValue = "전체";
	$scope.getScope = function(){
		alert($scope.selectValue);
	};
});
app.directive("headTag", function(){
	return {
		template : "<h1>앵귤라 참 쉽죠!</h1>"
	};
});