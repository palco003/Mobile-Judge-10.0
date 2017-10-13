Ext.define('MobileJudge.view.students.Stats', {
    extend: 'Ext.container.Container',
    xtype: 'studentstats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'charts',
    viewModel: {
        type: 'charts'
    },
    layout: 'responsivecolumn',

    items: [
        {
            xtype:'column-basic-3d',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});
