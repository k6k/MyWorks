'use strict';

app.controller("userCtrl", function(UserdataToStorage,$scope,$route,$localStorage) {
    $scope.name = "User";
    $scope.results = UserdataToStorage.get();
    $scope.refresh = function () {
    	var t = UserdataToStorage.put().then(function(data) {
                   /* $scope.$on('reloadData',function(result){
                        
                    });*/
                   $scope.results = data;
                    //window.location.reload(true);
                });
    	
    }
    
});

app.controller("homeCtrl", function(GroupdataToStorage,UserdataToStorage,$scope) {
    $scope.name="Flo";
    GroupdataToStorage.put();
    UserdataToStorage.put();
});

app.controller("headerCtrl", function($scope) {
    $scope.name="Flo";
}); 

app.controller("eventCtrl", function(Event,$scope) {
	$scope.name="Flo";
    Event.getEventList().success(function(data){
        $scope.results = angular.fromJson(data);
    });
    
}); 

app.controller("groupCtrl", function(GroupdataToStorage,$scope) {
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