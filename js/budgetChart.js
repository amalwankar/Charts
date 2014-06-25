$(function () {

    var budgetData = [7000, 20000, 32000, 61000, 94000, 101000, 110000]; // 118000, 135876, 160000, 173000, 192000];
    var maxValue = 11;

        function yZero(data){
        var fitObj = fitData(data);
         fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
         return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
     }

        $('#budget_container').highcharts({
            title: {
                text: 'Budget',
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {
                        rotation: -45,
                    }
            },
            yAxis: {
                gridLineWidth: 0.3,
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' CAD'
            },
            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                x: 0,
                y: 0
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Actual',
                data: budgetData, 
                 type: 'area',
                color: "#93bf52"//"#55BF3B" //green
            }, {
                name: 'Expected',
                data: yZero(budgetData),
                type: 'line',
                dashStyle: 'dot',
                color: "black" 
            }]
        });
    });
    
