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
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Expected',
                data: [50, 60, 80]
            }, {
                name: 'Actual',
                data: [45, 64, 70]
            }]
        });
    });