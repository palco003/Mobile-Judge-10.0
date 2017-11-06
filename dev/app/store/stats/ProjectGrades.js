Ext.define('MobileJudge.store.stats.ProjectGrades', {
    extend: 'Ext.data.Store',
    alias: 'store.projectGrades',

    requires: [
        'Ext.data.Store',
        'MobileJudge.model.stats.GroupedProjects'
    ],

    // TODO: get average grade
    groupField: 'project',
    fields: ['grade', 'project'],

    listeners: {
        beforeload: function() {
            // instance of the original store
            var store = Ext.create('MobileJudge.store.stats.ProjectGrades');

            Ext.define('MobileJudge.store.stats.GroupedProjects', {
                extend: 'Ext.data.Store',
                model: 'MobileJudge.model.stats.GroupedProjects'
            });

            // store to contain the grouped data
            var groupedStore = Ext.create('MobileJudge.store.stats.GroupedProjects');

            // iterate the groups and average the 'grade' value per project
            store.getGroups().each(function(item) {
                console.log(item);
                groupedStore.add({
                    project: item.getGroupKey(),
                    grade: item.average('grade')
                });
            });
        }
    },
    autoLoad: true,
    pageSize: 0
});
