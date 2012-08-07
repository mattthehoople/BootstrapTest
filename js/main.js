window.Router = Backbone.Router.extend({

    routes: {
        "": "home"
    },

    initialize: function () {
        this.header = new Header();
        $('#header').html(this.header.render().el);
    },

    home: function () {

        this.overviewTop = new OverviewTop();
        this.overviewTop.render();
		$("#overview_top").html(this.overviewTop.el);
		
        this.salesChart = new SalesChart();
        this.salesChart.render();	
		$("#sales_chart").html(this.salesChart.el);

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