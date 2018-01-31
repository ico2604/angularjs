var app = angular.module("Page1Controller", []);
app.controller("page1Controller", function($scope, $routeParams, $http, ListService){
	
	if($routeParams.name != undefined){
		console.log("rout : "+$routeParams.name);
		$scope.data_name = $routeParams.name;
	}
		
	$scope.page1_title = "여기에요?";
	$scope.list_data = ListService.page1;
	$scope.remove = function(rows){
		var index =  $scope.list_data.findIndex(function(item){
			return item.name === rows.name;
		});
		if(index > -1){
			$scope.list_data.splice(index, 1);
		}
	}
	$scope.update = function(rows){
		var index =  $scope.list_data.findIndex(function(item){
			return item.name === rows.name;
		});
		
		var data = {
				name: rows.name,
				check: rows.check
		}
		
		if(index > -1){
			$scope.list_data.splice(index, 1, data);
		}
	}
	$scope.add = function(){
		var data = {
				name: $scope.name,
				check: false
		}
		$scope.list_data.push(data);
	}
	$scope.test = function(){
		//console.log($scope.list_data);
		
//		$http({
//			method: "GET",
//			url: "resources/json/img.json",
//			headers: {"Content-Type": "application/json;charset=utf8"}
//		}).then(function(result){ // 성공하면 오는 곳
//				console.log(result);
//			 }, function(result){ // 실패(오류) 하면 오는 곳
//				console.log(result);
//		});
		
		$http.post("testDB")
		     .then(function(result){ // 성공하면 오는 곳
				console.log(result);
			 }, function(result){ // 실패(오류) 하면 오는 곳
				console.log(result);
		});
	}
	$scope.detail = function(rows){
		location.href = "#!/page1/" + rows.name;
	}
});



