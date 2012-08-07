window.SalesChart = Backbone.View.extend({

    initialize:function () {},

    events:{},

    render:function () {
        $(this.el).html(this.template());
		var chart;

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'salesChart',
                type: 'line'
            },
			title: {
				text: null  
			}, 
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Sales (£)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y +'°C';
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Sales',
                data: [700.0, 690.9, 950.5, 140.5, 1800.2, 210.5, 250.2, 626.5, 723.3, 818.3, 1113.9, 499.6]
            }]
        });
        return this;
    }

});