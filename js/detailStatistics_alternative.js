$(function () {

     var burndownData = [120, 118, 110, 99, 88,  74, 66]; //57, 49, 39, 26, 15];
     var maxValue = 11



    function yZero(data){
        var fitObj = fitData(data);
         fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
         return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
     }
    
     var chart = $('#burndown_container').highcharts({
            title: {
                text: 'Burn down',
                style: {
                    color: '#5e5e5e'
                }
            },
            subtitle: {
                text: 'Tasks',
                style: {
                    color: '#5e5e5e'
                }
            },
            xAxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',
                    'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
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
            yAxis: {
                gridLineWidth: 0.3,
                title: {
                    text: null,
                    style: {
                        color: '#5e5e5e'
                    }
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
                name: 'Actual',
                data: burndownData, 
                 type: 'area',
                color: "#93bf52"//"#55BF3B" //green
            }, {
                name: 'Projected',
                data: yZero(burndownData),
                type: 'line',
                dashStyle: 'dot',
                color: "grey",

            }]
        });

        
        var burndownchart = $('#burndown_container').highcharts();
    
        var burndownSeries = burndownchart.series[1];
        burndownSeries.hide();
        burndownSeries.show();
        burndownSeries.hide();
            burndownchart.setSize(300, 200);
                // the button action
        $burndownButton = $('#burndown-button');
        $burndownButton.click(function() {

            if (burndownSeries.visible) {
                burndownSeries.hide();
                $burndownButton.html('Show Projection');
            } else {
                burndownSeries.show();
                $burndownButton.html('Hide Projection');
            }
        });

    });
    
