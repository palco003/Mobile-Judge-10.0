Ext.define('MobileJudge.view.judges.Grades', {
    extend: 'MobileJudge.view.charts.Base',
    xtype: 'judge_grades',

    requires: [
        'Ext.util.Format',
        'MobileJudge.store.stats.QuestionAverage'
    ],

    title: 'Average Grade Given by Question',
    platformConfig: {
        classic: {
            items: [
                {
                    xtype: 'chart',
                    bind: '{avgQuestionGrades}',
                    // store: {
                    //     type: 'questionAverage' // questionAverage
                    // },
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
                            text: 'Question',
                            fontSize: 16
                        },
                        position: 'bottom',
                        renderer: function (axis, v) {
                            v = Ext.util.Format.ellipsis(v, 50);
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
                        xField: 'question',
                        yField: ['grade'],
                        style: {
                            minGapWidth: 10
                        },
                        highlightCfg: {
                            saturationFactor: 1.5
                        },
                        label: {
                            field: 'grade',
                            display: 'insideEnd',
                            renderer: function (text) {
                                return Ext.Number.toFixed(parseFloat(text), 2);
                            }
                        },
                        // listeners: {
                        //     itemclick: function (chart, item) {
                        //         var store = Ext.createByAlias('store.questionGrades');
                        //         var msg = "<p style=\"text-align: center;\">";
                        //         var last = '';
                        //         for (var i = 0; i < store.getCount(); i++) {
                        //             if (item.record.get('question') === store.getAt(i).get('question')) {
                        //                 if (store.getAt(i).get('comment') !== null) {
                        //                     var split = store.getAt(i).get('judge').toString().split(" ");
                        //                     var current = store.getAt(i).get('judge').toString();
                        //                     if (current !== last) {
                        //                         msg += "<br>-------------------------------";
                        //                     }
                        //                     msg += "<br>" + split[0].charAt(0)
                        //                         + ". "
                        //                         + split[1]
                        //                         + " ("
                        //                         + store.getAt(i).get('student')
                        //                         + ") -- "
                        //                         + store.getAt(i).get('grade');
                        //
                        //                     last = current;
                        //                 }
                        //             }
                        //         }
                        //
                        //         msg += "</p>";
                        //         Ext.Msg.alert(item.record.get('question'), msg);
                        //     }
                        // }
                    }],
                    plugins: {
                        ptype: 'chartitemevents',
                        moveEvents: true
                    }
                }]
        }
    }
});

