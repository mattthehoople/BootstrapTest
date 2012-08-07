window.Footer = Backbone.View.extend({

    initialize:function () {},

    events:{},

    render:function () {
        $(this.el).html(this.template());
        return this;
    }

});