// var store = Ext.create('Ext.data.Store', { //('MobileJudge.store.stats.ProjectGrades', {
//     storeId: 'projectGrades',
//     // alias: 'store.projectGrades',
//
//     // TODO: get average grade
//     groupField: 'project',
//     fields: ['grade', 'project'],
//
//     autoLoad: true,
//     data: []
//     // pageSize: 0
// });

// Ext.define('MobileJudge.store.stats.GroupedProjects', {
//     extend: 'Ext.data.Store',
//     alias: 'store.groupedProjects',
//     requires: [
//         'MobileJudge.model.stats.GroupedProjects'
//     ],
//
//     model: 'MobileJudge.model.stats.GroupedProjects',
//     listeners: {
//         load: function() {
//             // // instance of the original store
//             // Ext.define('MobileJudge.store.stats.GroupedProjects', {
//             //     extend: 'Ext.data.Store',
//             //     model: 'MobileJudge.model.stats.GroupedProjects'
//             // });
//
//             // store to contain the grouped data
//             var groupedStore = Ext.create('MobileJudge.store.stats.GroupedProjects');
//             console.log(groupedStore);
//             // iterate the groups and average the 'grade' value per project
//             store.getGroups().each(function(item) {
//                 console.log(item);
//                 groupedStore.add({
//                     project: item.getGroupKey(),
//                     grade: item.average('grade')
//                 });
//             });
//         }
//     }
// });

Ext.define('MobileJudge.store.stats.ProjectGrades', {
    extend: 'Ext.data.Store',
    alias: 'store.projectGrades',
    storeId: 'projectGrades',
    fields: ['project', 'grade'],
    data: {
        items: [
    {
        "project": "Agricultural Robotics 3.0",
        "grade": 47.50,
    }, {
        "project": "Streamlining Community Service Process at FIU 1.0",
        "grade": 45.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 48.67,
    }, {
        "project": "Traffic Simulator 2.0",
        "grade": 12.00,
    }, {
        "project": "Agricultural Robotics 3.0",
        "grade": 43.33,
    }, {
        "project": "Streamlining Community Service Process at FIU 1.0",
        "grade": 50.00,
    }, {
        "project": "Professional Program Management System 1.0",
        "grade": 31.33,
    }, {
        "project": "Smart Billionaires 1.0",
        "grade": 32.00,
    }, {
        "project": "Academic Success Initiative - ASI PantherCentric 1.0",
        "grade": 44.67,
    }, {
        "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
        "grade": 50.00,
    }, {
        "project": "Academic Success Initiative - ASI PantherCentric 1.0",
        "grade": 50.00,
    }, {
        "project": "VIP Website 6.0",
        "grade": 46.50,
    }, {
        "project": "BOLO 8.0",
        "grade": 48.00,
    }, {
        "project": "Academic Success Initiative - ASI PantherCentric 1.0",
        "grade": 39.00,
    }, {
        "project": "Hemodynamic Imaging of Lower Extremity Ulcers 1.0",
        "grade": 44.20,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 38.67,
    }, {
        "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
        "grade": 49.67,
    }, {
        "project": "SkillCourt 8.0",
        "grade": 45.00,
    }, {
        "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
        "grade": 45.00,
    }, {
        "project": "BreazeHome 2.0",
        "grade": 48.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 33.00,
    }, {
        "project": "SkillCourt 8.0",
        "grade": 42.75,
    }, {
        "project": "Exploring the Unconscious 1.0",
        "grade": 43.67,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 47.33,
    }, {
        "project": "BreazeHome 2.0",
        "grade": 42.00,
    }, {
        "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
        "grade": 41.00,
    }, {
        "project": "Virtual Roll Call 2.0",
        "grade": 38.25,
    }, {
        "project": "BOLO 8.0",
        "grade": 50.00,
    }, {
        "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
        "grade": 47.00,
    }, {
        "project": "Traffic Simulator 2.0",
        "grade": 47.00,
    }, {
        "project": "BreazeHome 2.0",
        "grade": 48.67,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 25.67,
    }, {
        "project": "FLACADA 1.0",
        "grade": 42.00,
    }, {
        "project": "Professional Program Management System 1.0",
        "grade": 38.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 48.50,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 45.50,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 42.67,
    }, {
        "project": "Learning with Augmented Reality 3.0",
        "grade": 44.33,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 46.50,
    }, {
        "project": "BOLO 8.0",
        "grade": 45.00,
    }, {
        "project": "FLACADA 1.0",
        "grade": 0.00,
    }, {
        "project": "Learning with Augmented Reality 3.0",
        "grade": 41.75,
    }, {
        "project": "Life Management Platform 1.0",
        "grade": 41.50,
    }, {
        "project": "Exploring the Unconscious 1.0",
        "grade": 46.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 42.00,
    }, {
        "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
        "grade": 46.33,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 44.50,
    }, {
        "project": "Virtual Roll Call 2.0",
        "grade": 48.33,
    }, {
        "project": "Mobile Judge 9.0",
        "grade": 45.50,
    }, {
        "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
        "grade": 40.50,
    }, {
        "project": "VIP Website 6.0",
        "grade": 44.67,
    }, {
        "project": "BreazeHome 2.0",
        "grade": 42.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 45.00,
    }, {
        "project": "BOLO 8.0",
        "grade": 43.75,
    }, {
        "project": "Life Management Platform 1.0",
        "grade": 43.75,
    }, {
        "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
        "grade": 46.00,
    }, {
        "project": "Mobile Judge 9.0",
        "grade": 50.00,
    }, {
        "project": "Academic Success Initiative - ASI PantherCentric 1.0",
        "grade": 44.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 41.33,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 50.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 40.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 42.00,
    }, {
        "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
        "grade": 48.50,
    }]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});


Ext.define('MobileJudge.model.stats.GradeAverage', {
    extend: 'Ext.data.Model',
    fields: ['project', 'average']
});

Ext.define('MobileJudge.store.stats.GradeAverage', {
    extend: 'Ext.data.Store',
    alias: 'store.gradeAverage',
    model: 'MobileJudge.model.stats.GradeAverage',
    data: (function () {
        var data = [];
        var expense = Ext.createByAlias('store.students');
        console.log(expense);
        expense.group('project');
        var groups = expense.getGroups();
        console.log(groups);
        groups.each(function (group) {
            console.log(group);
            data.push({ project: group.config.groupKey, average: group.average('grade') });
        });
        return data;
    })()
});

