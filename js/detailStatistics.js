$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59, null, null, null, null, null, null]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74, null, null, null, null, null, null]; //83, 92, 101, 110, 118],
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Burn down and Budget'
            },
            xAxis: {
                type: 'linear'
            },
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} tasks',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Tasksin Scope',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Project Budget',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
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
                color: "#DDDF0D", //yellow 
                tooltip: {
                    valueSuffix: ' CAD'
                }
            }
            ,{
                name: "Burndown Trend",
                type: 'line',
                  data: [null, null, null, null, null, null, 59, 49, 33, 28, 19, 9, 0],
                  color: "#55BF3B", //green 
                },
                {
                name: "Budget Trend",
                type: 'line',
                  data: [null, null, null, null, null, null, 79, 83, 92, 101, 110, 118, 150],
                   color: "#DDDF0D", //yellow 
                }
            ]
        });
    });