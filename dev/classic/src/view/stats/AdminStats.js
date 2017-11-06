Ext.define('MobileJudge.view.stats.AdminStats', {
    extend: 'Ext.container.Container',
    xtype: 'admin_stats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'MobileJudge.view.charts.ChartsModel',
        'MobileJudge.view.charts.Controller',
        'MobileJudge.view.stats.GradeByProject'
    ],

    controller: 'charts',
    viewModel: {
        type: 'charts'
    },
    layout: 'responsivecolumn',

    defaultType: 'basechart',
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
            xtype:'gradeByProject',
            height: 400,
            userCls: 'big-100 small-100'
        },
        {
            xtype:'gradeByProject',
            height: 400,
            userCls: 'big-100 small-100'
        },
        {
            xtype:'gradeByProject',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});