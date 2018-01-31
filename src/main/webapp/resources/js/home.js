var app = angular.module("Home",[]);

app.controller("home", function($rootScope, $scope, $http, FileService){
	$rootScope.navEvnet();
	$scope.dataSource = [
		{title:"HTML", contents:"HTML은 하이퍼텍스트 마크업 언어라는 의미의 웹 페이지를 위한 지배적인 마크업 언어다. HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다. HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 '태그'로 되어있는 HTML 요소 형태로 작성한다."},
		{title:"CSS", contents:"종속형 시트 또는 캐스케이딩 스타일 시트는 마크업 언어가 실제 표시되는 방법을 기술하는 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 마크업 언어가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리 같은 꾸미는 역할을 담당한다고 할 수 있다. 즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다."},
		{title:"Javascript", contents:"자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 사용되고 있다."}
	];
	$scope.submit = function(){		
		console.log("submit()!", $scope.file);
		
		var formData = new FormData();
		for(var i = 0; i < $scope.file.length; i++){
			formData.append("file", $scope.file[i]);
		}
		formData.append("name",$scope.name);
		FileService.async("FileUpload",formData,undefined)
				   .then(function(){
					   var result = FileService.data();
					   console.log(result);
				   });
//		 $rootScope.FileUpload("FileUpload",formData,undefined);
	    }
	});

app.directive("file", function(){
	   var config = {};
	      config.scope={file: "="};
	      config.link = (scope, elements) => {
	         elements.bind("change", event => {
	            var file = event.target.files;
	            scope.file = file ? file : undefined;
	         });
	      };
	      console.log(config);
	      return config;
});