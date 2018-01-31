var app = angular.module("UpUser",[]);

app.controller("upUser", function($rootScope, $scope, FileService){
	$rootScope.navEvnet();
	
	console.log($rootScope.userLogin);
	
	$scope.upUser = () => {
		console.log($scope.user);
		FileService.async("upUser","", $scope.user)
		 .then(function(){
			var data = FileService.data();
			location.href="/login";
			console.log(data);
	});
  }
});