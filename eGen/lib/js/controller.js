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
			Fname:"",
			Lname:"",
			Email:"",
			Street:"",
			City:"",
			Phone:"",
			Mobile:""	
		}	
		$scope.reset=function(){
			$scope.user=angular.copy($scope.master);
		}
		$scope.reset();

		console.log("new user called");
}]);
