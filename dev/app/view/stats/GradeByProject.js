Ext.define('MobileJudge.view.stats.GradeByProject', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByProject',

    requires: [
        'MobileJudge.store.stats.GradeAverage'
    ],

    title: 'Grade by Project',
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
                    label: {
                        rotate: {
                            degrees: 0
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    highlight: true,
                    xField: 'project',
                    yField: ['grade'],
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

