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

    items: [
        {
            xtype:'gradeByProject',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});