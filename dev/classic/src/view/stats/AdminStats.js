Ext.define('MobileJudge.view.stats.AdminStats', {
    extend: 'Ext.container.Container',
    xtype: 'adminstats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'stats',
    viewModel: {
        type: 'stats'
    },
    layout: 'responsivecolumn',

    defaultType: 'basepie',
    defaults: {
        iconCls: 'x-fa fa-pie-chart',
        userCls: 'big-33 small-100',
        height: 300,
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype:'admingrades',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});

