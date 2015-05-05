CounterApp.controller('CounterController', function($scope){
    
    var hundredEcentSum = 0;
    var fiftyEcentSum = 0;
    var twentyEcentSum = 0;
    var tenEcentSum = 0;
    var fiveEcentSum = 0;
    var twoEcentSum = 0;
    var oneEcentSum = 0;
    var fiftyCcentSum = 0;
    var twentyCcentSum = 0;
    var tenCcentSum = 0;
    var fiveCcentSum = 0;
    
    var sumAll = function(){
        $scope.totalSum = ((hundredEcentSum +
                           fiftyEcentSum +
                           twentyEcentSum +
                           tenEcentSum +
                           fiveEcentSum +
                           twoEcentSum +
                           oneEcentSum +
                           fiftyCcentSum +
                           twentyCcentSum +
                           tenCcentSum +
                           fiveCcentSum) / 100) + '€';
    };
    
    $scope.$watch('hundredEuro', function(newValue, oldValue){
        if (newValue){
            hundredEcentSum = parseInt(newValue) * 10000;
        } else {
            hundredEcentSum = 0;
        }
        $scope.hundredEuroSum = (hundredEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiftyEuro', function(newValue, oldValue){
        if (newValue){
            fiftyEcentSum = parseInt(newValue) * 5000;
        } else {
            fiftyEcentSum = 0;
        }
        $scope.fiftyEuroSum = (fiftyEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twentyEuro', function(newValue, oldValue){
        if (newValue){
            twentyEcentSum = parseInt(newValue) * 2000;
        } else {
            twentyEcentSum = 0;
        }
        $scope.twentyEuroSum = (twentyEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('tenEuro', function(newValue, oldValue){
        if (newValue){
            tenEcentSum = parseInt(newValue) * 1000;
        } else {
           tenEcentSum = 0;
        }
        $scope.tenEuroSum = (tenEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiveEuro', function(newValue, oldValue){
        if (newValue){
            fiveEcentSum = parseInt(newValue) * 500;
        } else {
           fiveEcentSum = 0;
        }
        $scope.fiveEuroSum = (fiveEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twoEuro', function(newValue, oldValue){
        if (newValue){
            twoEcentSum = parseInt(newValue) * 200;
        } else {
           twoEcentSum = 0;
        }
        $scope.twoEuroSum = (twoEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('oneEuro', function(newValue, oldValue){
        if (newValue){
            oneEcentSum = parseInt(newValue) * 100;
        } else {
           oneEcentSum = 0;
        }
        $scope.oneEuroSum = (oneEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiftyCent', function(newValue, oldValue){
        if (newValue){
            fiftyCcentSum = parseInt(newValue) * 50;
        } else {
           fiftyCcentSum = 0;
        }
        $scope.fiftyCentSum = (fiftyCcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twentyCent', function(newValue, oldValue){
        if (newValue){
            twentyCcentSum = parseInt(newValue) * 20;
        } else {
           twentyCcentSum = 0;
        }
        $scope.twentyCentSum = (twentyCcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('tenCent', function(newValue, oldValue){
        if (newValue){
            tenCcentSum = parseInt(newValue) * 10;
        } else {
           tenCcentSum = 0;
        }
        $scope.tenCentSum = (tenCcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiveCent', function(newValue, oldValue){
        if (newValue){
            fiveCcentSum = parseInt(newValue) * 5;
        } else {
           fiveCcentSum = 0;
        }
        $scope.fiveCentSum = (fiveCcentSum / 100) + '€';
        sumAll();
    });
    
});