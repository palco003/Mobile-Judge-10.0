Ext.define('MobileJudge.view.students.Stats', {
    extend: 'Ext.container.Container',
    xtype: 'studentStats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'MobileJudge.view.charts.ChartsModel',
        'MobileJudge.view.charts.Controller',
        'MobileJudge.view.stats.*'
    ],

    layout: 'responsivecolumn',
    controller: 'student',
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
            xtype: 'student_grades',
            userCls: 'big-100 small-100'
        }
    ]

});
