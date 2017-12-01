Ext.define('MobileJudge.view.stats.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.stats',

    init: function (view) {
        var me = this;
        me.model = view.getViewModel();
        var data = null;
        var text = 'Accept';
        var dataArray = null;
        var status = null;
        me.loadJSONinStore(data);
    },

    loadJSONinStore: function (data) {
        Ext.Ajax.request({
            url: '/api/load_average_stores',
            success: function (response) {
                data = JSON.parse(response.responseText);
                console.log("=============== data");
                console.log(data);
                Ext.getStore('judgeQuestionGrades').setData(data);
            },
            failure: this.updateError,
            jsonData: data,
            disableCaching: true,
            method: 'GET'
        });
    }
});