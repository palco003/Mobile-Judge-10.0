Ext.define('MobileJudge.view.stats.GradeByQuestion', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByQuestion',

    requires: [
        'MobileJudge.store.stats.QuestionAverage'
    ],

    title: 'Average Grade by Question',
    platformConfig: {
        classic: {
            items: [{
                xtype: 'chart',
                store: {
                    type: 'questionAverage'
                },
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
                    maximum: 10,
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
                            degrees: -40
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    highlight: true,
                    xField: 'question',
                    yField: ['average'],
                    style: {
                        minGapWidth: 10
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: 'average',
                        display: 'insideStart'
                    },
                    listeners: {
                        itemclick: function(chart, item) {
                            var store = Ext.createByAlias('store.questionGrades');
                            var msg = "<p style=\"text-align: center;\">";

                            msg += "<br>-------------------------------";

                            for (var i = 0; i < store.getCount(); i++) {
                                if(item.record.get('question') === store.getAt(i).get('question')){
                                    msg += "<br>" + store.getAt(i).get('judge').toString()
                                        + " -- "
                                        + store.getAt(i).get('grade');
                                }
                            }

                            msg += "</p>";
                            Ext.Msg.alert(item.record.get('question'), msg);
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

