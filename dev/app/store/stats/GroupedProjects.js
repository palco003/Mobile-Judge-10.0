var store = Ext.create('Ext.data.Store', { //('MobileJudge.store.stats.ProjectGrades', {
    storeId: 'projectGrades',
    // alias: 'store.projectGrades',

    // TODO: get average grade
    groupField: 'project',
    fields: ['grade', 'project'],

    autoLoad: true,
    data: []
    // pageSize: 0
});

Ext.define('MobileJudge.store.stats.GroupedProjects', {
    extend: 'Ext.data.Store',
    alias: 'store.groupedProjects',
    requires: [
        'MobileJudge.model.stats.GroupedProjects'
    ],

    model: 'MobileJudge.model.stats.GroupedProjects',
    listeners: {
        beforeload: function() {
            // // instance of the original store
            // Ext.define('MobileJudge.store.stats.GroupedProjects', {
            //     extend: 'Ext.data.Store',
            //     model: 'MobileJudge.model.stats.GroupedProjects'
            // });

            // store to contain the grouped data
            var groupedStore = Ext.create('MobileJudge.store.stats.GroupedProjects');
            console.log(groupedStore);
            // iterate the groups and average the 'grade' value per project
            store.getGroups().each(function(item) {
                console.log(item);
                groupedStore.add({
                    project: item.getGroupKey(),
                    grade: item.average('grade')
                });
            });
        }
    }
});

