Ext.define('MobileJudge.view.stats.GradeByProject', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByProject',

    requires: [
        'Ext.util.Format',
        'MobileJudge.store.stats.GradeAverage'
    ],

    title: 'Average Grade by Project',
    platformConfig: {
        classic: {
            layout: 'fit',
            items: [{
                xtype: 'chart',
                store: {
                    type: 'gradeAverage'
                },
                insetPadding: {
                    top: 60,
                    bottom: 20,
                    left: 20,
                    right: 40
                },
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    grid: true,
                    title: {
                        text: 'Average Grade',
                        fontSize: 16
                    }
                }, {
                    type: 'category3d',
                    title: {
                        text: 'Project',
                        fontSize: 16
                    },
                    position: 'bottom',
                    renderer: function(axis, v){
                        v = Ext.util.Format.ellipsis(v,30);
                        return v.replace(/((?:\w+ ){3})/gi, "$1\n");
                    },
                    label: {
                        fontSize: 10,
                        rotate: {
                            degrees: -45
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    highlight: true,
                    xField: 'project',
                    yField: ['average'],
                    style: {
                        minGapWidth: 10
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: 'project',
                        display: 'insideStart'
                    }
                }]
                // sprites: {
                //     type: 'text',
                //     text: 'Grade by Project',
                //     fontSize: 25,
                //     width: 150,
                //     height: 30,
                //     x: 240,
                //     y: 40
                // }
            }]
        }
    }
});

