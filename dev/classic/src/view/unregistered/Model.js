Ext.define('MobileJudge.view.unregistered.Model', { 
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.unregistered',

	requires: [
	],

	data: {
		judgeFilter: []
	},

	formulas: {
		judgeFilterSelection: function(get) { return get('judgeFilter'); }
	},

	stores: {
		judgeStates: {
			type: 'judgeStates',
			storeId: 'judgeStates',
			listeners: {
				load: 'onStatesLoaded'
			}
		},

		unregjudges: {
			type: 'unregjudges',
			storeId: 'unregjudges',
			//listeners: {
			//	load: 'onStatesLoaded'
			//}
		},
	}
});