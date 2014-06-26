$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74]; //83, 92, 101, 110, 118],
        var maxValue = 11;

        function yZero(data){
            var fitObj = fitData(data);
            fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
            return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
        }

        $('#container').highcharts({
            // chart: {
            //     type: 'area'
            // },
            title: {
                text: 'Burndown & Budget'
            },
            xAxis: {
                type: 'linear',
                title: {
                    text: null
                }
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                // labels: {
                //     rotation: -45,
                //     // style: {
                //     //     fontSize: '13px',
                //     //     fontFamily: 'Verdana, sans-serif'
                //     // }
                // }
            },
            yAxis: [{ // Primary yAxis
                gridLineWidth: 0.1,
                labels: {
                    format: '{value} tasks',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                // title: {
                //     text: 'Tasks',
                //     style: {
                //         color: Highcharts.getOptions().colors[1]
                //     }
                // }
                title: null,
            }, { // Secondary yAxis
                gridLineWidth: 0.1,
                // title: {
                //     text: 'Budget',
                //     style: {
                //         color: Highcharts.getOptions().colors[1]
                //     }
                // },
                title: null,
                labels: {
                    format: '${value}k',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
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
                name: 'Tasks',
                type: 'area',
                yAxis: 1,
                data: burndownData,
                tooltip: {
                    valueSuffix: ' tasks'
                },
                color: '#55BF3B'
    
            },{
                name: 'Budget',
                type: 'area',
                data: budgetData,
                color: '#ec8b3a',// Orange "#DDDF0D", //yellow 
                tooltip: {
                    valueSuffix: ' CAD'
                }
            }
            ,{
                name: "Burndown Trend",
                type: 'line',
                 dashStyle: 'dot',
                 data: yZero(burndownData),
                  color: 'grey' //#ec8b3a'// Orange "#DDDF0D", //yellow //color: "#55BF3B", //green 
            },
            {
                name: "Budget Trend",
                type: 'line',
                dashStyle: 'dot',
                data: yZero(budgetData),
                color: 'grey' //#ec8b3a'// Orange "#DDDF0D", //yellow 
            }]
        });
    });