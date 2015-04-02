 app.service('Group', function ($http) {
  this.getGroup = function () {
     return $http.get('http://localhost/connectApps/group');
  };
});

 app.service('Day', function ($http) {
  this.getDay = function () {
     return $http.get('http://localhost/connectApps/day');
  };
});

 app.service('User', function ($http) {
  this.getUser = function () {
     return $http.get('http://localhost/connectApps/user');
  };
});

app.service('Event', function ($http) {
  this.getEventList = function () {
     return $http.get('http://localhost/connectApps/event');
  };

  this.getEventList = function () {
     return $http.get('http://localhost/connectApps/event');
  };

});