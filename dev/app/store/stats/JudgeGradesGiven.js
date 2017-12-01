Ext.create('Ext.data.Store', {
    storeId: 'judgeGradesGiven',
    listeners:{
        load : function() {
            var chart = Ext.getCmp("JudgeGradesChart");
        }
    },
    fields:['judgeId', 'studentId', 'question', 'grade'],
    data:[]
});

Ext.define('MobileJudge.view.grade.JudgeGradesChart', {
    extend: 'MobileJudge.view.stats.Base',
    alias: 'widget.JudgeGradesChart',
    store: 'judgeGradesGiven',
    initComponent: function() {
        this.callParent()
    },


});