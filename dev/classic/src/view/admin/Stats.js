Ext.define('MobileJudge.view.admin.Stats', {
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

    // defaultType: 'basepie',
    // defaults: {
    //     iconCls: 'x-fa fa-pie-chart',
    //     userCls: 'big-33 small-100',
    //     height: 300,
    //     defaults: {
    //         animation : !Ext.isIE9m && Ext.os.is.Desktop
    //     }
    // },

    items: [
        {
            title: 'Average Grade by Project',
            items: [
                {
                    xtype: 'smallpie', //change to 3d bar chart
                    bind: '{projects}'
                }
            ]
        }
        // {
        //     title: 'Average Grade by Question',
        //     items: [
        //         {
        //             xtype: 'smallpie',
        //             bind: '{graded}'
        //         }
        //     ]
        // },
        // {
        //     title: 'Average Grade by Student',
        //     items: [
        //         {
        //             xtype: 'smallpie',
        //             bind: '{accepted}'
        //         }
        //     ]
        // }
    ]
});
