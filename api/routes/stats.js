var epilogue = require('epilogue');

module.exports = function(server, db) {
    return { // TODO: change name of each one
        avgProjectGrades: epilogue.resource({
            model: db.stats_project_grades, // TODO: create new one and change it to that
            endpoints: [apiPrefix + '/stats/project_grades'],
            actions: ['list'],
            pagination: false
        }),
        avgQuestionGrades: epilogue.resource({
            model: db.stats_question_grades, // TODO: create new one and change it to that
            endpoints: [apiPrefix + '/stats/question_grades'],
            actions: ['list'],
            pagination: false
        }),
        graded: epilogue.resource({
            model: db.stats_graded,
            endpoints: [apiPrefix + '/stats/graded'],
            actions: ['list'],
            pagination: false
        }),
        accepted: epilogue.resource({
            model: db.stats_accepted,
            endpoints: [apiPrefix + '/stats/accepted'],
            actions: ['list'],
            pagination: false
        })
    };
};
