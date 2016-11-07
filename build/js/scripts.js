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

var userControl= angular.module('userControl',[]);

userControl.controller('UserController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

  $scope.sample={
    'name':'praveen',
    'email':'psureshk@usc.edu',
    'city':'Los Angeles',
    'company':'USC',
    'id':'123'
  };
// to get data of users
  $scope.getUsers=function(){
  	$http({
  	method:'GET',
  	url:'http://mocker.egen.io/users'
  }).success(function($data){

  	console.log("connection to json successful");
  	$scope.users=$data;

// console.log($scope.users);
  });
};

// call the get users command
$scope.getUsers()

 

//to delete a specific user from the list and send bac the 
	


}]);


userControl.controller('ViewUserController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

	$http({
		method:'GET',
		url:'http://mocker.egen.io/users/'+$routeParams.userId
	}).success(function($user)
	{
		$scope.user=$user;
		console.log("data retrieved" + $user.firstName);
	});

	$scope.deleteUser=function(){
		$http.delete('http://mocker.egen.io/users/'+$routeParams.userId)
				.success(function($data)
							{
								console.log(" deleted value "+$data.firstName);
								$scope.getUsers();
							}
						)};
}]);


userControl.controller('NewUserController',['$scope','$http','$routeParams',
		function($scope,$http,$routeParams){
		
		$scope.master={
			firstName:"",
			lastName:"",
			email:"",
			street:"",
			city:"",
			zip:"",
			mobile:""	
		}	
		$scope.reset=function(){
			$scope.user=angular.copy($scope.master);
		}
		
		console.log("new user called");
}]);

// left side nav bar
var slider=true;
$("#hamburger a").on("click",function(){
  if(slider)
 {

  $('#navRight').addClass('show-sidenav');
  $('#hamburger').addClass('move-main');
  slider=!slider;
  // alert("add class");
 //  $("#content").css('width:100%');
 //   $(".navbar-default").css('width:100%');
 //  $

  }
  else{
   $('#navRight').removeClass('show-sidenav');
   $('#hamburger').removeClass('move-main');
  slider=!slider;
  // alert(" remove class");
  }
});



           
// $(this).hide("slide", { direction: "left" }, 1000);