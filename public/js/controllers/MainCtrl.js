angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.tagline = 'To the moon and back!';
	var tabs = ["tab1", "tab2", "tab3"];
	$scope.tab = [true,false,false];


	function changeTabs(tab){
		if (tab == "tab1"){
			$scope.tab = [true,false,false];
		} else if (tab == "tab2") {
			$scope.tab = [false,true,false];
		} else {
			$scope.tab = [false,false,true];
		}
	}


	$(function(){
	  $('.nav-tab a').click(function (e) {
	  	var tab = e.target.id;
	  	console.log(tab);
	  	changeTabs(tab);
	  });
	});



});