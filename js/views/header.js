window.Header = Backbone.View.extend({

    initialize:function () {},

    events:{},

    render:function () {
        $(this.el).html(this.template());
		$('#top_cash_off').popover();
        return this;
    }

});