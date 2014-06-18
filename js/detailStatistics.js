$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59, null, null, null, null, null]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74, null, null, null, null, null]; //83, 92, 101, 110, 118],
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Burn down and project budget chart'
            },
            xAxis: {
                //type: 'datetime',
            
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
                name: 'Budget',
                type: 'area',
                //pointInterval: 48* 3600 * 1000,
                //pointStart: Date.UTC(2014, 5, 05),
                yAxis: 1,
                data: burndownData,
                tooltip: {
                    valueSuffix: ' CAD'
                }
    
            },{
                name: 'Tasks/Issues in the Scope',
                type: 'area',
                //pointInterval: 48* 3600 * 1000,
                 //pointStart: Date.UTC(2014, 5, 05),
                data: budgetData,
                tooltip: {
                    valueSuffix: ' tasks'
                }
            }
                // ,{
                // type: 'spline',
                //   /* function returns data for trend-line */
                //   pointInterval: 1* 3600 * 1000,
                //   pointStart: Date.UTC(2014, 5, 05),
                //   data: [burndownData[0], burndownData[length-1]]
                // }
            ]
        });
    });