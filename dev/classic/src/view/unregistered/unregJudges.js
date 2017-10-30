Ext.define('MobileJudge.view.unregistered.unregJudges', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.unregjudges',

    requires: [
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Action',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar'
    ],

    //listeners: {
        //afterrender: 'changeIcon',
        //painted: 'changeIcon',

        //cellclick: 'onRegister',
        /*function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent){
            var zRec = iView.getRecord(iRowEl);
            window.open("/#register");*/
            //var data = Ext.getStore("unregjudges").data.items[iRowIdx];


        //}

        /*cellclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
            var data = Ext.getStore("unregjudges").data.items[iRowIdx];*/

            //if (iColIdx < 3)
            //    Ext.widget('gradejudgedetailwizard').show().loadData(data);
    //},

    bind: '{unregjudges}',

dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'dataview',
                    cls: 'stateSelector',
                    id:'filterbtn2',
                    loadMask: false,
                    trackOver: false,
                    itemSelector: '.stateSelector button',
                    selectedItemCls: 'selected',
                    hidden: true,
                    selectionModel: {
                        type: 'dataviewmodel',
                        storeId: 'unregjudges',
                        mode: 'SIMPLE'
                    },
                    tpl: [
                        '<tpl for=".">',
                            '<button type="button" title="{name}" id="{name}">{abbr}</button>',
                        '</tpl>'
                    ],
                    bind: {
                        selection: '{judgeFilterSelection}',
                        store: '{judgeStates}'
                    },
                    listeners: {
                        selectionchange: 'onFilterChange'
                    }
                },
                '->',
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{unregjudges}'
        }
    ],

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'fullName',
            text: 'Name',
            flex: 1,
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'email',
            text: 'Email',
            flex: 2,
        },
    ]
});
