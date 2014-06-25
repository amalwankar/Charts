$(function () {

     var burndownData = [120, 118, 110, 99, 88,  74, 66]; //57, 49, 39, 26, 15];
     var maxValue = 11


    function yZero(data){
        var fitObj = fitData(data);
         fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
         return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
     }
        $('#burndown_container').highcharts({
            title: {
                text: 'Burn down',
            },
            subtitle: {
                text: 'Tasks'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {
                        rotation: -45,
                        // style: {
                        //     fontSize: '13px',
                        //     fontFamily: 'Verdana, sans-serif'
                        // }
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
                name: 'Actual',
                data: burndownData, 
                 type: 'area',
                color: '#ec8b3a'//"#E18A07" //Orange
            }, {
                name: 'Expected',
                data: yZero(burndownData),
                type: 'line',
                dashStyle: 'dot',
                color: "#000000" //green 
            }]
        });
    });
    
