Ext.define('MobileJudge.store.stats.States', {
    extend: 'Ext.data.Store',
    alias: 'store.statsStates',

    fields: ['state', 'total'],

    autoLoad: true,
    pageSize: 0
});
