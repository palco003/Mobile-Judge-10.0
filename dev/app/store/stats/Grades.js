Ext.define('MobileJudge.store.stats.Grades', {
    extend: 'Ext.data.Store',
    alias: 'store.statsGrades',

    proxy: {
        type: 'api',
        url: '/api/load_average_stores'
    },

    autoLoad: true,
    pageSize: 0,

    fields: [
        { name: 'questionId', type: 'int', convert: null },
        { name: 'studentId', type: 'int', convert: null },
        { name: 'judgeId', type: 'int', convert: null },
        {
            name: 'grade',
            type: 'int',
            convert: function(v) {
                return (v && Ext.isArray(v)) ? v[0] : v;
            }
        }
    ]
});
