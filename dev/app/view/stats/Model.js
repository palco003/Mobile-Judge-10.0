Ext.define('MobileJudge.view.stats.StatsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.stats',

    requires: [
        'MobileJudge.proxy.API',
        'MobileJudge.store.stats.GradeAverage',
        'MobileJudge.store.stats.QuestionAverage',
    ],

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
