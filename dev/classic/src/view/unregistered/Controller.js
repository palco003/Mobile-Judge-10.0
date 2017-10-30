Ext.define('MobileJudge.view.unregistered.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.unregistered',

    windows: {},
    model: null,
    deleteRecord: {},

    init: function (view) {
        this.model = view.getViewModel();
        var data = null;
        var text = 'Accept';
        var dataArray = null;
        var status = null;
    },

    onStatesLoaded: function (store, records) {
        var filter = store.getStoreId().replace(/States/, 'Filter');
        this.model.set(filter, records);
    },


    onFilterChange: function (selModel, selections) {
        var filter = ["PE"];
        this.model.getStore(selModel.storeId).filter('abbr', Ext.isEmpty(filter) ? 'XX' : filter);

    },


    /*loadSecondViewData: function (data) {
        var me = this;
        Ext.Ajax.request({
            url: '/api/second_view',
            success: function (response) {
                var data = JSON.parse(response.responseText)
                Ext.getStore('studentDetailData').loadData(data);
                var average = me.getAverage(data);

                Ext.getCmp('gradeLabel').setText(average);
                me.changeIconSecondView();
            },
            failure: this.updateError,
            jsonData: data,
            disableCaching: true,
            method: 'POST'
        });
    },*/

    /*onRegister : function(data){
        Ext.Ajax.request({
            url: '/api/unregs',
        })
            
    },*/
    /*onJudgesUpdate: function(editor, e){
        var store = Ext.getStore("judges");
        var record = store.getAt(e.rowIdx);
        var idx = record.get('id');
        var fN = record.get('fullName').split(' ')[0];
        var lN = record.get('fullName').split(' ')[1];
        var ema = record.get('email');
        var ti = record.get('title');
        var aff = record.get('affiliation');
        var sta = record.get('state');

        if(/^\d+$/.test(sta)){
            var jsonObj = {
                id: idx,
                firstName: fN,
                lastName: lN,
                email: ema,
                title: ti,
                affiliation: aff ,
                state: sta
            }
        }else{
            var jsonObj = {
                id: idx,
                firstName: fN,
                lastName: lN,
                email: ema,
                title: ti,
                affiliation: aff ,
            }
        }

        Ext.Ajax.request({
            url: '/api/users/'+ idx,
            method: 'PUT',
            jsonData: Ext.encode(jsonObj),
            success: function () {
                store.reload();
            }

        });


    }*/

});

/*function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel, store1) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';

    if (ShowLabel) {
        var row = "";

        for (var index in arrData[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }

    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        for (var index in arrData[i]) {
            row += ''+ arrData[i][index] + ',';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");

    link.href = uri;
    link.style = "visibility:hidden";
    link.download = ReportTitle + ".csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}*/
