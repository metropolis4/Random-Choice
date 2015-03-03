var randomizer = angular.module('randomizer', []);

randomizer.controller('randomizer', ['$scope', function($scope){
    $scope.choices = [];
    $scope.finalChoice = '';    
    $scope.addChoice = function(){
        $scope.choices.push({choice: $scope.choice, active: true});
        $scope.choice = '';
    };
    $scope.makeChoice = function(){
        $scope.selectedChoices = [];
        angular.forEach($scope.choices, function(choice){
            if(choice.active) $scope.selectedChoices.push(choice);
        });
        var randomChoice = Math.floor(Math.random() * $scope.selectedChoices.length);
        $scope.finalChoice = $scope.selectedChoices[randomChoice].choice;

    };
    $scope.reset = function(){
        $scope.choices = [];
        $scope.finalChoice = '';
    };
}]);