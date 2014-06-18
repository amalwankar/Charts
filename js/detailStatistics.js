$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59, null, null, null, null, null]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74, null, null, null, null, null]; //83, 92, 101, 110, 118],
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Burn down and project budget chart vs Sprint days'
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
                    text: 'Number of Tasks/Issues in Scope',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Project Budget',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '${value}k',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 50   ,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Tasks/Issues in the Scope',
                type: 'area',
                yAxis: 1,
                data: burndownData,
                tooltip: {
                    valueSuffix: ' tasks'
                }
    
            },{
                name: 'Budget',
                type: 'area',
                data: budgetData,
                tooltip: {
                    valueSuffix: ' CAD'
                }
            }
            ,{
                name: "Burndown Trend estimate",
                type: 'line',
                  data: [null, null, null, null, null, null, 59, 49, 33, 28, 19, 9, 0]
                },
                {
                name: "Budget Trend estimate",
                type: 'line',
                  data: [null, null, null, null, null, null, 79, 83, 92, 101, 110, 118, 150]
                }
            ]
        });
    });