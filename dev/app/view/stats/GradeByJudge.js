Ext.define('MobileJudge.view.stats.GradeByJudge', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByJudge',

    requires: [
        'Ext.util.Format',
        'MobileJudge.store.stats.JudgeAverage'
    ],

    title: 'Average Grade by Judge',
    platformConfig: {
        classic: {
            items: [{
                xtype: 'chart',
                store: {
                    type: 'judgeAverage'
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
                    maximum: 10,
                    grid: true,
                    title: {
                        text: 'Average Grade',
                        fontSize: 16
                    }
                }, {
                    type: 'category3d',
                    title: {
                        text: 'Judge',
                        fontSize: 16
                    },
                    position: 'bottom',
                    renderer: function(axis, v){
                        v = Ext.util.Format.ellipsis(v,50);
                        return v.replace(/((?:\w+ ){3})/gi, "$1\n");
                    },
                    label: {
                        rotate: {
                            degrees: -50
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    highlight: true,
                    xField: 'judge',
                    yField: ['average'],
                    style: {
                        minGapWidth: 10
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: 'average',
                        display: 'insideEnd',
                        renderer: function (text) {
                            return Ext.Number.toFixed(parseFloat(text), 2);
                        }
                    },
                    listeners: {
                        itemclick: function(chart, item) {
                            var store = Ext.createByAlias('store.questionGrades');
                            var msg = "<p style=\"text-align: center;\">";
                            var last = '';
                            var counter = 1;
                            for (var i = 0; i < store.getCount(); i++) {
                                if(item.record.get('judge') === store.getAt(i).get('judge')){
                                    if(store.getAt(i).get('comment') !== null){
                                        var split = store.getAt(i).get('judge').toString().split(" ");
                                        var current = store.getAt(i).get('student').toString();
                                        if(current !== last){
                                            msg += "<br>-------------------------------";
                                            counter = 1;
                                        }
                                        msg += "<br>" + counter
                                            + ". "
                                            + store.getAt(i).get('student')
                                            + " -- "
                                            + store.getAt(i).get('grade');

                                        last = current;
                                        counter++;
                                    }
                                }
                            }

                            msg += "</p>";
                            Ext.Msg.alert(item.record.get('judge'), msg);
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

