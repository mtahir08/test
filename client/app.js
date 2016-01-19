
angular.module('myApp', [])
.controller('appController',function($scope,$http){

	$scope.name = "";
    $scope.login =  function(){
    	$http.post('/add',{name:'ziakhan'})
    	.then(function(data){
				$scope.name = data.data;
    	},
    	function(err){
    			console.log('error',err)
    	})
    }
});
