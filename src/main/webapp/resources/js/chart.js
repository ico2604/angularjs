var app = angular.module("Chart",[]);

app.controller("chart", function($rootScope, $scope){
	$rootScope.navEvnet();
	$rootScope.loginCheck();
	$scope.dataSources = [
		{ data:[{
				width: 70,
				class: "",
				typeName : "",
				type:true
		}]},
		{ data:[{
				width: 44,
				class: "progress-bar-success",
				typeName: "Complete (success)",
				type:true
		}]},
		{ data:[{
				width: 50,
				class: "progress-bar-info",
				typeName: "Complete (info)",
				type:true
		}]},
		{ data:[{
				width: 60,
				class: "progress-bar-warning",
				typeName: "Complete (warning)",
				type:true
		}]},
		{ data:[{
				width: 70,
				class: "progress-bar-danger",
				typeName: "Complete (danger)",
				type:true
		}]},
		{ data:[{
				width: 40,
				class: "progress-bar-striped",
				typeName: "",
				type:true
		}]},
		{ data:[{
				width: 40,
				class: "progress-bar-success",
				typeName: "Free Space"
				},{
					width: 10,
					class: "progress-bar-warning",
					typeName: "Warning"
				},{
					width: 20,
					class: "progress-bar-danger",
					typeName: "Danger"
		}]}
    ];
});
app.directive("bar" , function(){
	/*********************************************
	 * restrict 규칙
	 *       매칭                   사용벙
	 * E : element	   <bar></bar>
	 * A : attribute   <div data-bar></div> 
	 * C : class	   <div class="bar"></div>
	 * M : comment	   <!-- directive : bar -->
	 * 
	 * scope 정의 
	 * @ : 문자열로 사용하겠다.		(Text Binding)단방향
	 * = : 데이터타입 그대로 적용하겠다.(Two-way-Binding)양방향
	 *********************************************/
	return {
		restrict : "E",
		scope : {
			value : "="
		},
		templateUrl	 : 'resources/views/directive/progressbar.html'
	}
});