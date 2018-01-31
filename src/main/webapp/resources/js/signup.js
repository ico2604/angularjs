var app = angular.module("SignUp",[]);

app.controller("signUp", function($rootScope, $scope, FileService){
	$rootScope.navEvnet();
	
	$scope.addUser = () => {
		console.log($scope.user);
		FileService.async("addUser","", $scope.user).then(function(){
			var data = FileService.data();
			console.log(data);
		});
	};
});