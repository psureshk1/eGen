var myApp=angular.module("myApp",['ngRoute','userControl'])
		.config(function($routeProvider){
			$routeProvider.
				when("/users",{
					templateUrl:"partials/users.html",
					controller:"UserController"
				}).when('/users/new',{
					templateUrl:'partials/newUsers.html',
					controller:'NewUserController'
				}).when('/users/:userId/view',{
					templateUrl:'partials/viewUser.html',
					controller:'ViewUserController'
				}).when('/users/delete',{
					templateUrl:'partials/users.html',
					controller:'UserController'
				}).otherwise(
				{
				redirectTo:'/users'
				});
		});

// var userControl=angular.module("userControl",[]);

// myApp.controller('UserController',['$scope','$http',function($scope,$http){

  
//   // $scope={
//   //   'name':'praveen',
//   //   'email':'psureshk@usc.edu',
//   //   'city':'Los Angeles',
//   //   'company':'USC'
//   //         };
//   console.log("user contoller called");
//   // $http.get('lib/js/legislator.json').success(function(data){
//   //   $scope.legislator=data.results;
//   // });
// }]);
