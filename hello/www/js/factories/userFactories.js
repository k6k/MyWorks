app.factory('UserdataToStorage',function ($http,$q) {
        return {
            put: function () {
                    var deferred = $q.defer();
	            	$http.get('http://localhost/connectApps/user').success(function(data){
	            	  var dataToStore = angular.toJson(data);
	            	  localStorage.setItem('UserHillsong',dataToStore);
                      deferred.resolve(dataToStore);
                      //$scope.$broadcast('reloadData',dataToStore);
                      //return localStorage.getItem('ConnectA2'); 
                      
           		   });
                    return deferred.promise;
            },

            get: function(){
            	return angular.fromJson(localStorage.getItem('UserHillsong'));
            },

            del:function(){
                return localStorage.clear();
            }

        }
});


app.factory('GroupdataToStorage', function ($http) {
        return {
            put: function () {
                    $http.get('http://localhost/connectApps/group').success(function(data){
                    var dataToStore = angular.toJson(data);
                    localStorage.setItem('GroupHillsong',dataToStore);
                 });
                return true;
            },

            get :function(){
                return angular.fromJson(localStorage.getItem('GroupHillsong'));
            }
        }
});
