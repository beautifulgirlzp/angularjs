mytask.controller("getStudentDatas",function($scope){
	$scope.studentDatas1 = [
		{
			name: "tomcat",
			age: "123",
			doing: "班级1"
		},
		{
			name: "apache",
			age: "134",
			doing: "班级1"
		},
		{
			name: "node",
			age: "10",
			doing: "班级1"
		},
		{
			name: "nginx",
			age: "100",
			doing: "班级1"
		}
	];

	$scope.studentDatas2 = [
		{
			name: "tom",
			age: "23",
			doing: "班级2"
		},
		{
			name: "jimi",
			age: "21",
			doing: "班级2"
		},
		{
			name: "brucelee",
			age: "28",
			doing: "班级2"
		},
		{
			name: "jame",
			age: "31",
			doing: "班级2"
		}
	];

	$scope.studentDatas3 = [
		{
			name: "zhangsan",
			age: "21",
			doing: "班级3"
		},
		{
			name: "lisi",
			age: "22",
			doing: "班级3"
		},
		{
			name: "wangwu",
			age: "23",
			doing: "班级3"
		},
		{
			name: "zhaoliu",
			age: "24",
			doing: "班级3"
		}
	];
	$scope.showIndex = 1;
	$scope.showFn = function (index){
		$scope.showIndex = index;
	}
	$scope.studentDatas = $scope["studentDatas1"];
	$scope.showFn2 = function(obj){
		$scope.studentDatas = obj;
	}
});