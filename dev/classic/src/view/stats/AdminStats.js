Ext.define('MobileJudge.view.stats.AdminStats', {
    extend: 'Ext.container.Container',
    xtype: 'admin_stats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'MobileJudge.view.admin.Grades',
        'MobileJudge.view.charts.ChartsModel',
        'MobileJudge.view.charts.Controller'
    ],

    controller: 'charts',
    viewModel: {
        type: 'charts'
    },
    layout: 'responsivecolumn',

    items: [
        {
            xtype:'admin_grades',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});

