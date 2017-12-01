Ext.create('Ext.data.Store', {
    alias: 'store.judgeGradesGiven',
    storeId: 'judgeGradesGiven',
    // listeners:{
    //     load : function() {
    //         var chart = Ext.getCmp("JudgeGradesChart");
    //     }
    // },
    fields:['judgeId', 'studentId', 'question', 'grade'],
    data:[]
});

Ext.define('MobileJudge.model.stats.JudgeQuestionAverage', {
    extend: 'Ext.data.Model',
    fields: ['question', 'average']
});


Ext.define('MobileJudge.store.stats.JudgeQuestionAverage', {
    extend: 'Ext.data.Store',
    alias: 'store.judgeQuestionAverage',
    model: 'MobileJudge.model.stats.JudgeQuestionAverage',
    data: (function () {
        var data = [];
        var store = Ext.getStore('judgeGradesGiven');
        var items = store.data.items;
        items.forEach(function (item) {
            console.log(item);
        });

        console.log('=========== store');
        console.log(store);
        store.group('question');
        console.log('=========== groups');
        var groups = store.getGroups();
        console.log(groups);
        console.log(groups.length);
        for (var i = 0; i < groups.length; i++) {
            console.log("in for loops");
            console.log(groups.items.config.groupKey);
        }
        groups.each(function (group) {
            console.log('=========== group');
            console.log(group);
            data.push({
                question: group.config.groupKey,
                average: group.average('grade')
            });
        });
        return data;
    })()
});

Ext.define('MobileJudge.view.grade.JudgeGradesChart', {
    extend: 'MobileJudge.view.stats.Base',
    alias: 'widget.JudgeGradesChart',
    store: 'judgeGradesGiven',
    initComponent: function() {
        this.callParent()
    },


});