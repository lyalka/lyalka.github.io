angular.module('myApp', ['nvd3'])
    .controller('myCtrl', function($scope){
        $scope.options = {
            chart: {
                type: 'multiChart',
                height: 250,
                margin : {
                    top: 30,
                    right: 20,
                    bottom: 40,
                    left: 50
                },
                color: d3.scale.category10().range(),
                useInteractiveGuideline: true,
                duration: 500,
                xAxis: {
                    tickFormat: function(d){
                        console.log(new Date(d))
                        return d3.time.format('%x')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                
            }
        };


        $scope.data = [];

        $scope.data[0] = {
            key: 'Trigger1',
            type: 'area',
            yAxis: 1,
            color: 'rgb(240, 0, 0)',
            values: [
                {x: new Date('10/12/2016'), y: 10},
                {x: new Date('02/18/2017'), y: 10}
            ]
        };
        
        $scope.data[1] = {
            key: 'Trigger2',
            type: 'area',
            yAxis: 1,
            color: 'rgb(255, 191, 0)',
            values: [
                {x: new Date('10/12/2016'), y: 20},
                {x: new Date('02/18/2017'), y: 20}
            ]
        };

        $scope.data[2] = {
            key: 'Trigger3',
            type: 'area',
            yAxis: 1,
            color: 'rgb(144, 197, 58)',
            values: [
                {x: new Date('10/12/2016'), y: 20},
                {x: new Date('02/18/2017'), y: 20}
            ]
        };

        $scope.data[3] = {
            key: 'Values',
            type: 'line',
            yAxis: 1,
            color: '#000',
            values: [
                {x: new Date('10/12/2016'), y: 30},
                {x: new Date('11/10/2016'), y: 2},
                {x: new Date('12/12/2016'), y: 18},
                {x: new Date('12/30/2016'), y: 48},
                {x: new Date('01/01/2017'), y: 3},
                {x: new Date('02/01/2017'), y: 3},
                {x: new Date('02/18/2017'), y: 18},
            ]
        };
    });