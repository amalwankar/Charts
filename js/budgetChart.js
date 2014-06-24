$(function () {

    var budgetData = [7000, 20000, 32000, 61000, 94000, 101000, 110000, 118000, 135876, 160000, 173000, 192000];



        $('#container').highcharts({
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
                    text: 'Budget Amount'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' Tasks'
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
                name: 'Actual Budget',
                data: budgetData, 
                 type: 'area',
                color: "#55BF3B" //green
            }, {
                name: 'Expected',
                data: (function() {
                       return fitData(budgetData).data;
            })(),
                color: "brown" //grey 
            }]
        });
    });
    
