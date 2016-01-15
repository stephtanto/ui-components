angular.module('ComponentCtrl', []).controller('ComponentController', function($scope) {

	function init(){
		$scope.example = {
			tabs: [
			{path:"#",value:"Tab 1"},
			{path:"#",value:"Tab 2"},
			{path:"#",value:"Tab 3"}
			],
			active: 0,
			content:"Content Here"
		};
	}

	init();

	$scope.changeTab = function(e, index){
		e.preventDefault();
		$scope.example.active = index;
	};

});