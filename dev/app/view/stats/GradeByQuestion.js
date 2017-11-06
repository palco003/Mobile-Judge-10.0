Ext.define('MobileJudge.view.stats.GradeByQuestion', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByQuestion',

    title: 'Grade by Question',
    platformConfig: {
        classic: {
            bind: '{judges_grade}',
            items: [{
                xtype: 'chart',
                insetPadding: {
                    top: 60,
                    bottom: 20,
                    left: 20,
                    right: 40
                },
                // store: store,
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
                        text: 'Question',
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
                    xField: 'question',
                    yField: ['grade'],
                    style: {
                        minGapWidth: 10
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: 'questionId',
                        display: 'insideStart'
                    }
                }]
            }]
        }
    }
});

