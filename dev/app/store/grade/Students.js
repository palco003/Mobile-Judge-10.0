Ext.define('MobileJudge.store.grade.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',

    model: 'MobileJudge.model.grade.Student',

    proxy: {
        type: 'api',
        reader: {
            type: 'json'
        },
        url: '/api/students'
    },

    remoteSort: true,
    remoteFilter: true,
    pageSize: 999,
});