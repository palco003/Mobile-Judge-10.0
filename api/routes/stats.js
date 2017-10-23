var epilogue = require('epilogue');

module.exports = function(server, db) {
    return {
        projects: epilogue.resource({
            model: db.student_grade,                    // reference api/models/student_grades
            endpoints: [apiPrefix + '/stats/project'],
            actions: ['list'],
            pagination: false
        })
        // ,
        // judges: epilogue.resource({
        //     model: db.stats_judges,
        //     endpoints: [apiPrefix + '/stats/judges'],
        //     actions: ['list'],
        //     pagination: false
        // }),
        // students: epilogue.resource({
        //     model: db.stats_students,
        //     endpoints: [apiPrefix + '/stats/students'],
        //     actions: ['list'],
        //     pagination: false
        // }),
        // graded: epilogue.resource({
        //     model: db.stats_graded,
        //     endpoints: [apiPrefix + '/stats/graded'],
        //     actions: ['list'],
        //     pagination: false
        // }),
        // accepted: epilogue.resource({
        //     model: db.stats_accepted,
        //     endpoints: [apiPrefix + '/stats/accepted'],
        //     actions: ['list'],
        //     pagination: false
        // })
    };
};
