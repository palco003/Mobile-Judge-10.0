Ext.define('MobileJudge.view.stats.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-basic-3d',

	model: null,

	init: function(view) {
		this.model = view.getViewModel();
		if (view.xtype == 'studenthome') this.loadProfile();
	},

	loadProfile: function(btn) {
		var me = this;
		if (btn) btn.setDisabled(true);
		Ext.Ajax.request({
			url: '/api/profile',
			method: 'GET',
			callback: function() {
				if (btn) btn.setDisabled(false);
			},
			success: function(resp) {
				var profile = Ext.decode(resp.responseText);
				Ext.each(profile, function(key) {
					me.model.set(key, profile[key]);
				});
			}
		});
	},

    onSeriesLabelRender: function (v) {
        return Ext.util.Format.number(v);
    },

    onTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('project') + ': ' +
            Ext.util.Format.number(record.get('grade')));
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except adding a thousands separator, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        return Ext.util.Format.number(layoutContext.renderer(label));
    }
});
