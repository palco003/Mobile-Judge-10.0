Ext.define('MobileJudge.store.judges.QuestionGrades', {
    extend: 'Ext.data.Store',
    alias: 'store.judgeQuestionGrades',

    proxy: {
        type: 'api',
        url: '/api/question_grades'
    },

    autoLoad: true,
    pageSize: 0,

    fields: [
        { name: 'studentId', type: 'int', convert: null },
        { name: 'judgeId', type: 'int', convert: null },
        { name: 'question', type: 'string', convert: null },
        {
            name: 'grade',
            type: 'int',
            convert: function(v) {
                return (v && Ext.isArray(v)) ? v[0] : v;
            }
        }
    ]
});
