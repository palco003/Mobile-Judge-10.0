var epilogue = require('epilogue');

module.exports = function(server, db) {
    return {
        avgQuestionGrades: epilogue.resource({
            model: db.judges_grade,
            endpoints: [apiPrefix + '/stats/grades_given'],
            actions: ['list'],
            pagination: false
        })
    };
};
