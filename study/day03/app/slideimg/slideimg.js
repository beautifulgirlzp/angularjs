myapp.directive("easyDemo",function(){
	return {
		templateUrl: "slideimg/slideimg.html",
		controller: function($scope, $http, $interval){
			$http({
				url: 'http://10.48.0.41:3000/User/getImgSlide',
				type: 'post',
				params: {
					id: "1601",
					name: "yinguit"
				}
			}).success(function(res){
				$scope.imgArr = res.result;
				$scope.showIndex = 0;
				$interval(function(){
					if( $scope.showIndex >= $scope.imgArr.length-1 ){
						$scope.showIndex = 0;
						return;
					}
					$scope.showIndex++;
				},2000);
			});
		}
	}
});