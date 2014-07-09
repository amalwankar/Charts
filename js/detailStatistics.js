$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74]; //83, 92, 101, 110, 118],
        var maxValue = 11;

        function yZero(data){
            var fitObj = fitData(data);
            fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
            return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
        }

        $('#detail-container').highcharts({
            // chart: {
            //     type: 'area'
            // },
            title: {
                text: 'Burndown & Budget',
                style: {
                    color: '#5e5e5e',
                    fontSize: "16px"
                }
            },
            xAxis: {
                type: 'linear',
                title: {
                    text: "Week"
                },
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                labels: {
                    rotation: -45,
                    style: {
                        color: '#5e5e5e'
                    }
                    // style: {
                    //     fontSize: '13px',
                    //     fontFamily: 'Verdana, sans-serif'
                    // }
                }
            },
            yAxis: [{ // Primary yAxis
                gridLineWidth: 0.1,
                labels: {
                    format: '{value} tasks',
                    style: {
                        color: '#5e5e5e'
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
                        color: '#5e5e5e'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                // layout: 'horizontal',
                // borderWidth: 0,
                // x: 0,
                // y: 0
                enabled: false
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
                color:  "#55aded"//"#55BF3B" //green
    
            },{
                name: 'Budget',
                type: 'area',
                data: budgetData,
                color: "#93bf52", //"#55BF3B" //green
                tooltip: {
                    valuePrefix: '$',
                    valueSuffix: 'k'
                }
            }
            ,{
                name: "Burndown Trend",
                type: 'line',
                 dashStyle: 'dot',
                 data: yZero(burndownData),
                 tooltip: {
                    valueSuffix: ' tasks'
                },
                  color: 'grey' //#ec8b3a'// Orange "#DDDF0D", //yellow //color: "#55BF3B", //green 
            },
            {
                name: "Budget Trend",
                type: 'line',
                dashStyle: 'dot',
                data: yZero(budgetData),
                                tooltip: {
                    valuePrefix: '$',
                    valueSuffix: 'k'
                },
                color: 'grey' //#ec8b3a'// Orange "#DDDF0D", //yellow 
            }]
        });

var chart = $('#detail-container').highcharts();
        chart.series[2].hide();
        chart.series[3].hide();
        chart.setSize(300, 320);
                // the button action
        $budgetButton = $('#detail-button');
        $budgetButton.click(function() {
            var series2 = chart.series[2];
            var series3 = chart.series[3];            
            if (series2.visible && series3.visible) {
                series2.hide();
                series3.hide();
                $budgetButton.html('Show Projection');
            } else {
                series2.show();
                series3.show();
                $budgetButton.html('Hide Projection');
            }
        });
    });