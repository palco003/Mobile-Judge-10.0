Ext.define('MobileJudge.view.stats.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.stats',

    init: function (view) {
        var me = this;
        me.model = view.getViewModel();
        var data = null;
        me.loadJSONinStore(data);
    },

    loadJSONinStore: function (data) {
        var me = this;
        Ext.Ajax.request({
            url: '/api/load_average_stores',
            success: function (response) {
                var data = JSON.parse(response.responseText);
                Ext.getStore('judgeGradesGiven').loadData(data);
                // var store = Ext.getStore('judgeGradesGiven');
                // console.log(store);
                // var items = store.data.items;
                // items.forEach(function (item) {
                //     console.log(item);
                // })
                // me.loadAverageinStore(data);
            },
            failure: this.updateError,
            jsonData: data,
            disableCaching: true,
            method: 'GET'
        });
    },

    onStoreLoaded: function (){

    },

    loadAverageinStore: function (data) {
        Ext.Ajax.request({
            url: '/api/load_average_stores',
            success: function (response) {
                var data = JSON.parse(response.responseText);
                // Ext.getStore('judgeGradesGiven').loadData(data);
                // var store = Ext.getStore('judgeGradesGiven');
                // console.log(store);
                // var items = store.data.items;
                // items.forEach(function (item) {
                //     console.log(item);
                // })
            },
            failure: this.updateError,
            jsonData: data,
            disableCaching: true,
            method: 'PUT'
        });
    }
});