angular
  .module('angularApp', [])
  .controller('MainController', MainController)
  .factory();


function MainController($scope) { 
	$scope.x = "xas";
}

//