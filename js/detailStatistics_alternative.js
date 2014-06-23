$(function () {

     var burndownData = [120, 118, 110, 99, 88,  74, 66, 57, 49, 39, 26, 15];



        $('#container').highcharts({
            title: {
                text: 'Burn down Chart',
                //x: -20 //center
            },
            subtitle: {
                text: 'Expected vs Actual',
                //x: -20
            },
            xAxis: {

                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Tasks'
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
                layout: 'vertical',
                borderWidth: 0,
                x: 0,
                y: 0
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Actual Task Burndown',
                data: burndownData, 
                 type: 'area',
                color: "#E18A07" //Orange
            }, {
                name: 'Expected Burndown',
                data: (function() {
                       return fitData(burndownData).data;
            })(),
                color: "#000000" //green 
            }]
        });
    });
    
