Ext.define('MobileJudge.store.stats.AverageGradeGiven', {
    extend: 'Ext.data.Store',
    alias: 'store.statJudgeGrades',

    fields: ['grade', 'questionId'],

    autoLoad: true,
    pageSize: 0
});
