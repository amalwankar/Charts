$(function () {
	
    var gaugeOptions = {
	
	    chart: {
	        type: 'solidgauge'
	    },
	    
	    title: null,
	    
	    pane: {
	    	center: ['50%', '85%'],
	    	size: '125%',
	        startAngle: -90,
	        endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
	    },

	    tooltip: {
	    	enabled: false
	    },
	       
	    // the value axis
	    yAxis: {
			stops: [
				[0.25, '#ec8b3a'], // yellow  DDDF0D // orange ec8b3a // ['#DDDF0D', '#55BF3B', '#DF5353']
	        	[0.5, '#93bf52'], // green
	        	[0.8, '#e34e33'] // red
			],
			lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
	        title: {
                y: -58,
                style : { "color": "#5e5e5e", "fontSize": "18px" }

	        },
            labels: {
                y: 20
            }        
	    },
        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    // The scope gauge
    $('#container-scope').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
	        min: 0,
	        max: 200,
	        title: {
	            text: 'Scope'
	        },
            style: {
                    color: '#5e5e5e'
            }       
	    },

	    credits: {
	    	enabled: false
	    },
	
	    series: [{
	        //name: 'Scope',
	        data: [100],
	        dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:16px;color:' + 
                    ('#5e5e5e') + '">{y}</span><br/>' + 
                   	'<span style="font-size:10px;color:#5e5e5e">Complete issues</span></div>'
	        },
	        tooltip: {
	            valueSuffix: 'Completed issues'
	        }
	    }]
	
	}));
    
    // The Budget gauge
    $('#container-budget').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
        	min: 0,
        	max: 100000,
	        title: {
	            text: 'Budget'
	        }       
	    },
		    credits: {
	    	enabled: false
	    },
	    series: [{
	        //name: 'Budget',
	        data: [84000],
	        dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:16px;color:' + 
                   ('#5e5e5e') + '">{y}</span><br/>' + 
                   	'<span style="font-size:10px;color:#5e5e5e">CAD</span></div>'
	        },
	        tooltip: {
	            valueSuffix: '$'
	        }      
	    }]
	
	}));
    
    //time gauge

        $('#container-time').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
        	min: 0,
        	max: 50,
	        title: {
	            text: 'Time'
	        }       
	    },
		    credits: {
	    	enabled: false
	    },
	    series: [{
	        name: 'Time',
	        data: [10],
	        dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:16px;color:' + 
                     ('#5e5e5e') + '">{y}</span><br/>' + 
                   	'<span style="font-size:10px;color:5e5e5e">Developer Days</span></div>'
	        },
	        tooltip: {
	            valueSuffix: 'Developer Days'
	        }      
	    }]
	
	}));
	
});