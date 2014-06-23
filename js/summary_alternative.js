$(function () {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Summary KPI'
            },
            xAxis: {
                categories: ['Budget', 'Scope', 'Time'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage of Total',
                    align: 'high'
                }
            },
            tooltip: {
                valueSuffix: ' percent'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            // legend: {
            //     layout: 'vertical',
            //     align: 'right',
            //     verticalAlign: 'top',
            //     x: -5,
            //     y: 50,
            //     floating: true,
            //     borderWidth: 1,
            //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
            //     shadow: true
            // },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Expected',
                data: [50, 60, 80],
                "color": "#000000" //black
            }, {
                name: 'Actual',
                //data: [45, 64, 70],
                                data : [
                    {
                      "y": 45,

                      "color": "#55BF3B" //green
                    },
                    {
                      "y": 64,

                      "color": "#DF5353" //red
                    },
                    {
                      "y": 70,

                      "color": "#DDDF0D" //yellow
                    }
                    ]
            }]
        });
    });