Ext.define('MobileJudge.view.stats.StatsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.stats',

    requires: [
        'MobileJudge.proxy.API',
        'MobileJudge.store.stats.GroupedProjects',
        'MobileJudge.store.stats.QuestionGrades'
    ],

    stores: {
        avgProjectGrades: {
            type: 'groupedProjects',
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
        }
    }
});