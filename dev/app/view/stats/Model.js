Ext.define('MobileJudge.view.stats.StatsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.stats',

    stores: {
        avgQuestionGrades: {
            type: 'statJudgeGrades',
            storeId: 'statsQuestionGrades',
            proxy: {
                type: 'api',
                url: '/api/stats/grades_given'
            }
        }
    }
});
