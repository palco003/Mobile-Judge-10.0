Ext.define('MobileJudge.view.stats.StatsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.stats',

	stores: {
		judges: {
			type: 'statsStates',
			storeId: 'statsJudgeStates',
			proxy: {
				type: 'api',
				url: '/api/stats/judges'
			}
		},
		students: {
			type: 'statsStates',
			storeId: 'statsStudentStates',
			proxy: {
				type: 'api',
				url: '/api/stats/students'
			}
		},
		graded: {
			type: 'statsStates',
			storeId: 'statsGradedStates',
			proxy: {
				type: 'api',
				url: '/api/stats/graded'
			}
		},
		accepted: {
			type: 'statsStates',
			storeId: 'statsAcceptedStates',
			proxy: {
				type: 'api',
				url: '/api/stats/accepted'
			}
		}
	}
});
