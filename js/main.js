window.Router = Backbone.Router.extend({

    routes: {
        "": "home"
    },

    initialize: function () {
        this.header = new Header();
        $('#header').html(this.header.render().el);
		$('#top_cash_off').popover();
    },

    home: function () {

		this.overviewTop = new OverviewTop();
        this.overviewTop.render();
		$("#overview_top").html(this.overviewTop.el);
		
        this.salesChart = new SalesChart();
        this.salesChart.render();	
		$("#sales_chart").html(this.salesChart.el);
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

        this.trafficLightStats = new TrafficLightStats();
        this.trafficLightStats.render();		
		$("#traffic_light_stats").html(this.trafficLightStats.el);
		
        this.footer = new Footer();
        this.footer.render();		
		$("#footer").html(this.footer.el);
				
        this.notifications = new NotificationsModal();
        this.notifications.render();		
		$("#notifications_modal").html(this.notifications.el);		
		
        this.cashoffModal = new CashOffModal();
        this.cashoffModal.render();		
		$("#cashoff_modal").html(this.cashoffModal.el);		

	}

});

templateLoader.load(["CashOffModal", "Footer", "Header", "NotificationsModal", "OverviewTop", "SalesChart","TrafficLightStats"],
    function () {
        app = new Router();
        Backbone.history.start();
    });