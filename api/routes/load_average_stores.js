var epilogue = require('epilogue');
var	fetch = require('node-fetch');
fetch.Promise = require('bluebird');
var _ = require('lodash');

module.exports = function(server, db) {
    var trim = /^\/|\/$/g;

    server.get(apiPrefix + '/load_average_stores', function(req, res, next) {
        switch (req.user.role) {
            case 1: // Student
                db.judges_grade.findAll({
                    where: {
                        studentId: req.user.id
                    }
                }).then(function (student_grades) {
                    res.json(student_grades);
                });
                break;
            case 2: // Judge
                db.judges_grade.findAll({
                    where: {
                        judgeId: req.user.id
                    }
                }).then(function (judge_grades) {
                    res.json(judge_grades);
                });
                break;
            default:
                return next(new forbidden('You don\'t have access to grades'));
        }
    });
    return epilogue.resource({
        model: db.judges_grade,
        endpoints: [apiPrefix + '/load_average_stores'] //TODO: create a controller and change this
    });
};
