Ext.define('MobileJudge.view.unregistered.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.unregistered',

	windows: {},
	model: null,
	deleteRecord: {},

	init: function (view) {
		this.model = view.getViewModel();
		var data = null;
		var text = 'Accept';
		var dataArray = null;
		var status = null;
	},

	onStatesLoaded: function (store, records) {
		var filter = store.getStoreId().replace(/States/, 'Filter');
		this.model.set(filter, records);
	},

	onFilterChange: function (selModel, selections) {
		var filter = ["PE"];
		this.model.getStore(selModel.storeId).filter('abbr', Ext.isEmpty(filter) ? 'XX' : filter);
	},

	onTap: function (view, index, item, record) {
		localStorage.setItem("userId", JSON.stringify(record.id));

		Ext.widget({
			xtype: 'register',
			record: record,
			viewModel : {
				data: {
					unregjudges: record
				}
			}
		});
	}
});