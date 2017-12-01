Ext.define('MobileJudge.view.stats.TestingCharts', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'testingCharts',

    requires: [
        'Ext.util.Format'
    ],

    title: 'Testing binding',
    bind: '{avgQuestionGrades}',
    platformConfig: {
        classic: {
            layout: 'fit',
            items: [{
                xtype: 'cartesian',
                insetPadding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 40
                },
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    maximum: 50,
                    grid: true,
                    title: {
                        text: 'Grade',
                        fontSize: 16
                    }
                }, {
                    type: 'category3d',
                    title: {
                        text: 'Question ID',
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
                            degrees: -50
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    xField: 'questionId',
                    yField: ['grade'],
                    title: ['grade'],
                    label: {
                        field: ['grade'],
                        display: 'insideEnd',
                        renderer: function (text) {
                            return Ext.Number.toFixed(parseFloat(text), 2);
                        }
                    }
                }],
                plugins: {
                    ptype: 'chartitemevents',
                    moveEvents: true
                }
            }]
        }
    }
});
