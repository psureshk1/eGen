describe('Testing Angular JS',function(){

	// describe which part of the component be tested
	describe('testing Angular js controller',function(){
		
		// angular mock function
		it('should check if view is created for users',function(){
			module('myApp') //name of the angular module to be tested

			var scope={};
			var ctrl;
			inject(function($controller){

				ctrl=$controller('ViewUserController', {$scope:scope});
			});// controller service inject

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('testing puroposes');
		});// single unit test
	});
});