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
        var store = null;
        Ext.Ajax.request({
            url: '/api/load_average_stores',
            success: function (response) {
                data = JSON.parse(response.responseText);
                console.log("=============== data");
                console.log(data);
                store = Ext.create('MobileJudge.store.stats.Grades').setData(data);
                console.log(store);
            },
            failure: this.updateError,
            jsonData: data,
            disableCaching: true,
            method: 'GET'
        });
        Ext.define('MobileJudge.store.stats.JudgeAverageQuestion', {
            extend: 'Ext.data.Store',
            alias: 'store.judgeAverageQuestion',
            model: 'MobileJudge.model.stats.JudgeAverageQuestion',
            data: (function () {
                var data = [];
                // var store = Ext.create('MobileJudge.store.stats.Grades');
                store.group('question');
                var groups = store.getGroups();
                groups.each(function (group) {
                    data.push({
                        question: group.config.groupKey,
                        average: group.average('grade')
                    });
                });
                return data;
            })()
        });
    }
});