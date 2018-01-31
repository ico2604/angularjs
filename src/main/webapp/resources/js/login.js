var app = angular.module("Login",[]);

app.controller("login", function($rootScope, $scope,FileService){
	$rootScope.navEvnet();
	
	$rootScope.userLogin = [];
	
	$scope.login = () => {
		console.log($scope.user);
		FileService.async("login","", $scope.user).then(function(){
			var data = FileService.data();
			console.log(data);
			$rootScope.user = data.data;
			console.log($rootScope.user);
		});
	};
});