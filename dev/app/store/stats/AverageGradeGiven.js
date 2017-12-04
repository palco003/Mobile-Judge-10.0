Ext.define('MobileJudge.store.stats.AverageGradeGiven', {
    extend: 'Ext.data.Store',
    alias: 'store.statJudgeGrades',

    fields: ['question', 'grade'],

    autoLoad: true,
    pageSize: 0
});
