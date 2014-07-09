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
                valueSuffix: ' CAD'
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
                data: budgetData, 
                 type: 'area',
                color: '#ec8b3a'//"#E18A07" //Orange 
            }, {
                name: 'Projected',
                data: yZero(budgetData),
                type: 'line',
                dashStyle: 'dot',
                color: "grey" 
            }]
        });

        var budgetchart = $('#budget_container').highcharts();
        var budgetseries = budgetchart.series[1];
        budgetseries.hide();
        budgetseries.show();
        budgetseries.hide();
        budgetchart.setSize(300, 210);
                // the button action
        $budgetButton = $('#budget-button');
        $budgetButton.click(function() {
            if (budgetseries.visible) {
                budgetseries.hide();
                $budgetButton.html('Show Projection');
            } else {
                budgetseries.show();
                $budgetButton.html('Hide Projection');
            }
        });

    });
    
