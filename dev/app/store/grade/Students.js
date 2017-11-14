Ext.define('MobileJudge.store.grade.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',

    model: 'MobileJudge.model.grade.Student',

    proxy: {
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        url: '/api/students'
    },

    remoteSort: true,
    remoteFilter: true,
    pageSize: 999,
});