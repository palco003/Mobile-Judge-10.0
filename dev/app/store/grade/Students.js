Ext.define('MobileJudge.store.grade.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.studentsStats',

    requires: [
        'MobileJudge.proxy.API'
    ],

    config: {
        fields: [
            { name: 'id',               type: 'int', convert: null },
            { name: 'state',            type: 'string' },
            { name: 'abbr',             type: 'string' },
            { name: 'fullName',         type: 'string', persist: false },
            { name: 'email',            type: 'string' },
            { name: 'profileImgUrl',    type: 'string' },
            { name: 'project',          type: 'string' },
            { name: 'location',         type: 'string' },
            { name: 'grade',            type: 'float', convert: null },
            { name: 'rawGrade',         type: 'float', convert: null },
            { name: 'max',              type: 'int', convert: null },
            { name: 'filterStatus',     type: 'string', convert: null }
        ]
    },

    proxy: {
        type: 'api',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        url: '/api/students'
    },

    remoteSort: true,
    remoteFilter: true,
    pageSize: 999
});