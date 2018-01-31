var app = angular.module("Page3Controller", []);
app.controller("page3Controller", function($scope, $rootScope, $routeParams, $http){

	$scope.page = $routeParams.page.toUpperCase();
	$scope.list_data = [];
	$scope.type = "";
	
	$scope.one = function(){
		$scope.board = {no : $rootScope.no};
		$http.post("oneBoard","",{params: $scope.board})
		     .then(function(result){
		    	 console.log(result);
		    	 $scope.board = result.data;
		},function(result){
		    	 console.log(result);
		});
	};
	
	$scope.inUp = function(url){
		if($scope.page === "U"){
			url = "updateBoard";
		} else if($scope.page === "I"){
			url = "addBoard";
		}
		$http.post(url,"", {params: $scope.board})
		     .then(function(result){
		    	 console.log(result.data);
		    	 if(result.data.msgCode == "S"){
		    		 alert("글 " + $scope.type + "이 성공하셨습니다.");
		    		 location.href = "#!/page3/L";
		    	 } else {
		    		 alert(result.data.msg);
		    	 }
		},function(result){
		    	 console.log(result);
		});
	}
	
	$scope.back = function(){
		location.href = "#!/page3/L";
	}
	
	if($scope.page === "L"){
		console.log("리스트 화면");
		$scope.boardInsert = function(){
			location.href = "#!/page3/I";
		};
		$scope.list = function(){
			$http.post("listBoard")
			     .then(function(result){
			    	 console.log(result);
			    	 $scope.list_data = result.data.list;
			},function(result){
			    	 console.log(result);
			});
		}
		$scope.boardDetail = function(no){
			$rootScope.no = no;
			location.href = "#!/page3/D";
		}		
		
		$scope.list();
	}else if($scope.page === "D"){
		console.log("상세 화면");
		$scope.update = function(){
			location.href = "#!/page3/U";
		};
		$scope.del = function(){
			$http.post("deleteBoard","",{params: $scope.board})
			     .then(function(result){
			    	 console.log(result);
			    	 location.href = "#!/page3/L";
			},function(result){
			    	 console.log(result);
			});
		};
		
		$scope.one();
	}else if($scope.page === "I"){
		console.log("작성 화면");
		$scope.type = "작성";
		
	}else if($scope.page === "U"){
		console.log("수정 화면");
		$scope.type = "수정";
		$scope.one();
	}
	
});



