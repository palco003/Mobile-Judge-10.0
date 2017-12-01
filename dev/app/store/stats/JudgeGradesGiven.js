Ext.create('Ext.data.Store', {
    alias: 'store.judgeGradesGiven',
    storeId: 'judgeGradesGiven',
    listeners:{
        load : function() {
            var chart = Ext.getCmp("JudgeGradesChart");
        }
    },
    fields:['judgeId', 'studentId', 'question', 'grade'],
    data:[]
});
//
// Ext.define('MobileJudge.model.stats.JudgeQuestionAverage', {
//     extend: 'Ext.data.Model',
//     fields: ['question', 'average']
// });
//
//
// Ext.define('MobileJudge.store.stats.JudgeQuestionAverage', {
//     extend: 'Ext.data.Store',
//     alias: 'store.judgeQuestionAverage',
//     model: 'MobileJudge.model.stats.JudgeQuestionAverage',
//     data: (function () {
//         var data = [];
//         var store = Ext.createByAlias('store.judgeGradesGiven');
//         store.group('question');
//         var groups = store.getGroups();
//         groups.each(function (group) {
//             data.push({
//                 question: group.config.groupKey,
//                 average: group.average('grade')
//             });
//         });
//         return data;
//     })()
// });

Ext.define('MobileJudge.view.grade.JudgeGradesChart', {
    extend: 'MobileJudge.view.stats.Base',
    alias: 'widget.JudgeGradesChart',
    store: 'judgeGradesGiven',
    initComponent: function() {
        this.callParent()
    },


});