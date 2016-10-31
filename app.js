(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController ($scope){

    $scope.food = "";
    $scope.messageOut = "";

    $scope.checkFood = function () {

      if($scope.food){ // non empty list
        $scope.color = "color:green";
        var meal = $scope.food.split(',');
        var count = 0;
        var x;
        // , , counts as NO food.
        for (x in meal) {
          if(!(meal[x].length == 0 || !meal[x].trim())){
            count += 1;
          }
        }

        if(count > 3 ){ // two cases inside non-empty list
          $scope.messageOut = "Too much!";
        } else {
          $scope.messageOut = "Enjoy!";
        }

      } else { // empty list
        $scope.color = "color:red";
        $scope.messageOut = "Please enter data first";
      }
    };

  };

})();
