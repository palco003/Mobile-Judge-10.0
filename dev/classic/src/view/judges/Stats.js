Ext.define('MobileJudge.view.judges.Stats', {
    extend: 'Ext.container.Container',
    xtype: 'judgeStats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'MobileJudge.view.charts.ChartsModel',
        'MobileJudge.view.charts.Controller',
        'MobileJudge.view.stats.*'
    ],

    layout: 'responsivecolumn',
    controller: 'stats',
    viewModel: {
        data: {
        }
    },
    defaultType: 'basechart',
    defaults: {
        userCls: 'big-33 small-100',
        height: 750,
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            // Always 100% of container
            xtype: 'judge_grades',
            userCls: 'big-100 small-100'
        }
    ]

});
