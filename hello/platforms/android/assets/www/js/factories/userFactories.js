app.factory('UserdataToStorage',function ($http,$q) {
        return {
            put: function () {
                    var deferred = $q.defer();
	            	$http.get('http://localhost/connectApps/user').success(function(data){
	            	  var dataToStore = angular.toJson(data);
	            	  localStorage.setItem('ConnectA2',dataToStore);
                      deferred.resolve(dataToStore);
                      //return localStorage.getItem('ConnectA2');
           		   });
                   return deferred.promise;  
            },

            get: function(){
            	return angular.fromJson(localStorage.getItem('ConnectA2'));
            },

            del:function(){
                return localStorage.clear();
            }

        }
});


app.factory('GroupdataToStorage', function () {
        return {
            put: function () {
                    Group.getGroup().success(function(data){
                    var dataToStore = angular.toJson(data);
                    $scope.$storage = localStorage.setItem('GroupHillsong',dataToStore);
                 });
                return true;
            },

            get :function(){
                return angular.fromJson(localStorage.getItem('GroupHillsong'));
            }
        }
});
