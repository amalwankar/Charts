$(function () {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Summary KPI',
                style: {
                    color: '#5e5e5e'
                }
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
                },
                labels: {
                    
                    enabled:false,//default is true
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
                },
                series: {
                    stacking: 'percent'
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

                      color: "#93bf52" //green
                    },
                    {
                      y: 64,

                      color: "#e34e33" //red
                    },
                    {
                      y: 70,

                      color: "#ec8b3a" //yellow
                    }
                    ]
            }]
        });
    });