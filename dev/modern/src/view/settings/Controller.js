Ext.define('MobileJudge.view.settings.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.settings',

	model: null,

    init: function(view) {
        this.model = view.getViewModel();
    },

    onTermsLoaded: function() {
        var select = this.getReferences().termSelector,
	rec = select.getStore().findRecord('active', true);

        select.setValue(rec.get('id'));
    }

});
