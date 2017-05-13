var app = angular.module("Lauren", []);

app.controller("AnimalArray", ($scope) => {
	$scope.animals = ["liger", "pandas", "iguana"];
});
