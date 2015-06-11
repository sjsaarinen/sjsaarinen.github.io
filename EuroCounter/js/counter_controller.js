CounterApp.controller('CounterController', function($scope){
    
    $scope.show = true;
    
    $scope.fivehundredEuro = '';
    $scope.twohundredEuro = '';
    $scope.hundredEuro = '';
    $scope.fiftyEuro = '';
    $scope.twentyEuro = '';
    $scope.tenEuro = '';
    $scope.fiveEuro = '';
    $scope.twoEuro = '';
    $scope.oneEuro = '';
    $scope.fiftyCent = '';
    $scope.twentyCent = '';
    $scope.tenCent = '';
    $scope.fiveCent = '';
    $scope.twoEuroRoll = '';
    $scope.oneEuroRoll = '';
    $scope.fiftyCentRoll = '';
    $scope.twentyCentRoll = '';
    $scope.tenCentRoll = '';
    $scope.fiveCentRoll = '';
    
    $scope.counterView = true;
    $scope.listView = false;
    
    //variables to store amounts as cents to avoid float rounding errors
    var fivehundredEcentSum = 0;
    var twohundredEcentSum = 0;
    var hundredEcentSum = 0;
    var fiftyEcentSum = 0;
    var twentyEcentSum = 0;
    var tenEcentSum = 0;
    var fiveEcentSum = 0;
    var twoERollCentSum = 0;
    var twoEcentSum = 0;
    var oneERollCentSum = 0;
    var oneEcentSum = 0;
    var fiftyCRollCentSum = 0;
    var fiftyCcentSum = 0;
    var twentyCRollCentSum = 0;
    var twentyCcentSum = 0;
    var tenCcentSum = 0;
    var tenCRollCentSum = 0;
    var fiveCcentSum = 0;
    var fiveCRollCentSum = 0;
    
    var sumAll = function(){
        $scope.totalSum = ((fivehundredEcentSum +
                            twohundredEcentSum +
                            hundredEcentSum +
                            fiftyEcentSum +
                            twentyEcentSum +
                            tenEcentSum +
                            fiveEcentSum +
                            twoERollCentSum +
                            twoEcentSum +
                            oneERollCentSum +
                            oneEcentSum +
                            fiftyCRollCentSum +
                            fiftyCcentSum +
                            twentyCRollCentSum+
                            twentyCcentSum +
                            tenCRollCentSum +
                            tenCcentSum +
                            fiveCRollCentSum +
                            fiveCcentSum) / 100) + '€';
    };
    
    $scope.showCounter = function(){
        $scope.counterView = true;
        $scope.listView = false;
    };
    
    $scope.showList = function(){
        $scope.counterView = false;
        $scope.listView = true;
    };
    
    $scope.$watch('fivehundredEuro', function(newValue, oldValue){
        if (newValue){
            fivehundredEcentSum = parseInt(newValue) * 50000;
        } else {
            fivehundredEcentSum = 0;
        }
        $scope.fivehundredEuroSum = (fivehundredEcentSum / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twohundredEuro', function(newValue, oldValue){
        if (newValue){
            twohundredEcentSum = parseInt(newValue) * 20000;
        } else {
            twohundredEcentSum = 0;
        }
        $scope.twohundredEuroSum = (twohundredEcentSum / 100) + '€';
        sumAll();
    });
    
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
    
    $scope.$watch('twoEuroRoll', function(newValue, oldValue){
        if (newValue){
            twoERollCentSum = parseInt(newValue) * 5000;
        } else {
           twoEcRollCentSum = 0;
        }
        $scope.twoEuroRollSum = (twoERollCentSum / 100) + '€';
        $scope.twoEuroSum = ((twoERollCentSum + twoEcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twoEuro', function(newValue, oldValue){
        if (newValue){
            twoEcentSum = parseInt(newValue) * 200;
        } else {
           twoEcentSum = 0;
        }
        $scope.twoEuroCoinSum = (twoEcentSum / 100) + '€';
        $scope.twoEuroSum = ((twoERollCentSum + twoEcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('oneEuroRoll', function(newValue, oldValue){
        if (newValue){
            oneERollCentSum = parseInt(newValue) * 2500;
        } else {
           oneERollCentSum = 0;
        }
        $scope.oneEuroRollSum = (oneERollCentSum / 100) + '€';
        $scope.oneEuroSum = ((oneERollCentSum + oneEcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('oneEuro', function(newValue, oldValue){
        if (newValue){
            oneEcentSum = parseInt(newValue) * 100;
        } else {
           oneEcentSum = 0;
        }
        $scope.oneEuroCoinSum = (oneEcentSum / 100) + '€';
        $scope.oneEuroSum = ((oneERollCentSum + oneEcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiftyCentRoll', function(newValue, oldValue){
        if (newValue){
            fiftyCRollCentSum = parseInt(newValue) * 2000;
        } else {
           fiftyCRollCentSum = 0;
        }
        $scope.fiftyCentRollSum = (fiftyCRollCentSum / 100) + '€';
        $scope.fiftyCentSum = ((fiftyCRollCentSum + fiftyCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiftyCent', function(newValue, oldValue){
        if (newValue){
            fiftyCcentSum = parseInt(newValue) * 50;
        } else {
           fiftyCcentSum = 0;
        }
        $scope.fiftyCentCoinSum = (fiftyCcentSum / 100) + '€';
        $scope.fiftyCentSum = ((fiftyCRollCentSum + fiftyCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twentyCentRoll', function(newValue, oldValue){
        if (newValue){
            twentyCRollCentSum = parseInt(newValue) * 800;
        } else {
           twentyCRollCentSum = 0;
        }
        $scope.twentyCentRollSum = (twentyCRollCentSum / 100) + '€';
        $scope.twentyCentSum = ((twentyCRollCentSum + twentyCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('twentyCent', function(newValue, oldValue){
        if (newValue){
            twentyCcentSum = parseInt(newValue) * 20;
        } else {
           twentyCcentSum = 0;
        }
        $scope.twentyCentCoinSum = (twentyCcentSum / 100) + '€';
        $scope.twentyCentSum = ((twentyCRollCentSum + twentyCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('tenCentRoll', function(newValue, oldValue){
        if (newValue){
            tenCRollCentSum = parseInt(newValue) * 400;
        } else {
           tenCRollCentSum = 0;
        }
        $scope.tenCentRollSum = (tenCRollCentSum / 100) + '€';
        $scope.tenCentSum = ((tenCRollCentSum + tenCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('tenCent', function(newValue, oldValue){
        if (newValue){
            tenCcentSum = parseInt(newValue) * 10;
        } else {
           tenCcentSum = 0;
        }
        $scope.tenCentCoinSum = (tenCcentSum / 100) + '€';
        $scope.tenCentSum = ((tenCRollCentSum + tenCcentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiveCentRoll', function(newValue, oldValue){
        //countSums(fiveCcentSum, $scope.fiveCentSum, newValue);
        if (newValue){
            fiveCRollCentSum = parseInt(newValue) * 250;
        } else {
           fiveCRollCentSum = 0;
        }
        $scope.fiveCentRollSum = (fiveCRollCentSum / 100) + '€';
        $scope.fiveCentSum = ((fiveCcentSum + fiveCRollCentSum) / 100) + '€';
        sumAll();
    });
    
    $scope.$watch('fiveCent', function(newValue, oldValue){
        //countSums(fiveCcentSum, $scope.fiveCentSum, newValue);
        if (newValue){
            fiveCcentSum = parseInt(newValue) * 5;
        } else {
           fiveCcentSum = 0;
        }
        $scope.fiveCentCoinSum = (fiveCcentSum / 100) + '€';
        $scope.fiveCentSum = ((fiveCcentSum + fiveCRollCentSum) / 100) + '€';
        sumAll();
    });
    
    /*
    var countSums = function(centSum, euroSum, newValue){
        if (newValue){
            centSum = parseInt(newValue) * 5;
        } else {
            centSum = 0;
        }
        euroSum = (centSum / 100) + '€';
        sumAll();
    };*/
    
});
