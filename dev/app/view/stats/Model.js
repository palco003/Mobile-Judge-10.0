Ext.define('MobileJudge.view.stats.StatsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.stats',

    requires: [
        'MobileJudge.proxy.API',
        'MobileJudge.store.charts.States',
        'MobileJudge.store.stats.ProjectGrades',
        'MobileJudge.store.stats.QuestionGrades'
    ],

    stores: { // TODO: change types and storeid's
		avgProjectGrades: {
			type: 'projectGrades',
			storeId: 'statsProjectGrades',
			proxy: {
				type: 'api',
				url: '/api/stats/project_grades'
			}
		},
        avgQuestionGrades: {
			type: 'questionGrades',
			storeId: 'statsQuestionGrades',
			proxy: {
				type: 'api',
				url: '/api/stats/question_grades'
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
