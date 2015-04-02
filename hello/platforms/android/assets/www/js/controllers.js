'use strict';

app.controller("userCtrl", function(UserdataToStorage,$scope,$route,$localStorage) {
    $scope.name = "User";
    $scope.results = UserdataToStorage.get();
    $scope.refresh = function () {
    	var t = UserdataToStorage.put().then(function(data) {
                    $scope.results = data;
                    window.location.reload(true);
                });
    	
    }
    
});

app.controller("homeCtrl", function($scope) {
	$scope.name="Flo";
}); 

app.controller("headerCtrl", function(Group,$scope) {
	$scope.header = "Header World";
	$scope.results =  GroupdataToStorage.get();
	$scope.searchText = {};
	$scope.by = '$';
    $scope.orderProp="name";
});






/*$scope.searchText = {};
	$scope.by = '$';
	$scope.orderProp="login";*/
    /*$parse($scope.res);*/
    //console.log($scope.res);
    //$scope.$storage = /**/