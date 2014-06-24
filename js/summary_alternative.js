$(function () {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Summary KPI'
            },
            xAxis: {
                 gridLineWidth: 0,
                categories: ['Budget', 'Scope', 'Time'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                gridLineWidth: 0,
                title: {
                    text: 'Percentage of Total',
                    align: 'high'
                }
            },
            tooltip: {
                valueSuffix: ' percent'
            },
            legend: {
                enabled : false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}%'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Expected',
                data: [50, 60, 80],
                color: "#000000" //black
            }, {
                name: 'Actual',
                data : [
                    {
                      y: 45,

                      color: "#55BF3B" //green
                    },
                    {
                      y: 64,

                      color: "#DF5353" //red
                    },
                    {
                      y: 70,

                      color: "#DDDF0D" //yellow
                    }
                    ]
            }]
        });
    });