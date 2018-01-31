var app = angular.module("About",[]);

app.controller("about", function($rootScope, $scope){
	$rootScope.navEvnet();
	$rootScope.loginCheck();
	$scope.carouselData = [{
		type : true,
		url : "https://placehold.it/1920x400?text=JQuery",
		hTag:"Ajax",
		pTag:"JavaScript library"
	    },{
		url : "https://placehold.it/1920x400?text=AngularJS",
		hTag:"Directive",
		pTag:"MVW (Model-View-Whatever) Framework"
	}];
	$scope.hash = "#!/about";
	$scope.projectInfoData = 
		{data1:[{
			url:"https://placehold.it/150x99?text=JAVA",
			p:"Project Language"
		},{
			url:"https://placehold.it/150x99?text=SPRING",
			p:"Project Framework"
		}],
		data2 : ["Apache Tomcat","MariaDB","Maven"]
		};
});

app.directive("carousel" , function(){
	return {
		restrict : "E",
		templateUrl	 : 'resources/views/directive/carousel.html'
	}
});