Ext.define('MobileJudge.store.stats.QuestionGrades', {
    extend: 'Ext.data.Store',
    alias: 'store.questionGrades',
    // TODO: get average grade
    groupField: 'question',
    fields: ['grade', 'question'],

    autoLoad: true,
    pageSize: 0
});
