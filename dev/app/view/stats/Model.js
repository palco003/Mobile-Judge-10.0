Ext.define('MobileJudge.view.stats.StatsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.stats',

	stores: { // TODO: change types and storeid's
		judges: {
			type: 'chartStates',
			storeId: 'chartJudgeStates',
			proxy: {
				type: 'api',
				url: '/api/stats/judges'
			}
		},
		students: {
			type: 'chartStates',
			storeId: 'chartStudentStates',
			proxy: {
				type: 'api',
				url: '/api/stats/students'
			}
		},
		graded: {
			type: 'chartStates',
			storeId: 'chartGradedStates',
			proxy: {
				type: 'api',
				url: '/api/stats/graded'
			}
		},
		accepted: {
			type: 'chartStates',
			storeId: 'chartAcceptedStates',
			proxy: {
				type: 'api',
				url: '/api/stats/accepted'
			}
		}
	}
});
