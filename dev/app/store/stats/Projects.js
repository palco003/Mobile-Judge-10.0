Ext.define('MobileJudge.store.stats.Projects', {
    extend: 'Ext.data.Store',
    alias: 'store.statsProjects',

    proxy: {
        type: 'api',
        url: '/api/stats/project'
    },

    model: 'MobileJudge.model.grades.Student',

    autoLoad: true,
    pageSize: 0
});
