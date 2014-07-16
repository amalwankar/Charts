$(function () {

        var burndownData = [120, 115, 109, 94, 72,  70, 59]; //49, 33, 28, 19, 9];
        var budgetData = [7, 15, 24, 32, 51, 62, 74]; //83, 92, 101, 110, 118],
        var maxValue = 11;

        function yZero(data){
            var fitObj = fitData(data);
            fitObj.slope*maxValue + fitObj.intercept;//Math.floor((0-fitObj.intercept)/fitObj.slope);
            return[[data.length-1, data[data.length-1]], [maxValue, +(fitObj.slope*maxValue + fitObj.intercept).toFixed(2)]];
        }


        function  enableOrDisableToolTip(){

            if(window.innerWidth > window.innerHeight) return true; //disable tooltip for portrait mode
            return false;
        }

        $('#detail-container').highcharts({
            // chart: {
            //     type: 'area'
            // },
            title: {
                text: 'Burn Down & Costs',
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
                categories: ["Jul 4", "Jul 11", "Jul 18", "Jul 25", "Aug 1", "Aug 8", "Aug 15", "Aug 22", "Aug 29", "Sep 5", "Sep 12", "Sep 19"],
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
                    format: '{value} hours',
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
                enabled: enableOrDisableToolTip()
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
                name: 'Efforts in hours',
                type: 'area',
                yAxis: 1,
                data: burndownData,
                tooltip: {
                    valueSuffix: ' hours'
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

        if(window.orientation === 0){
             $budgetButton.hide();
        }


        jQuery(window).bind('orientationchange', function(e) {

          switch ( window.orientation ) {

            case 0:
                $budgetButton.hide();
                chart.tooltip.enabled = false;
            break;

            case 90:
                 $budgetButton.show();
                 chart.tooltip.enabled = true;
            break;

            case -90:
                $budgetButton.show();
                chart.tooltip.enabled = true;
            break;

          }

        });

    });
    


