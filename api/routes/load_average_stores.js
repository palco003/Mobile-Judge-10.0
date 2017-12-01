var epilogue = require('epilogue');
var	fetch = require('node-fetch');
fetch.Promise = require('bluebird');
var _ = require('lodash');

module.exports = function(server, db) {
    var trim = /^\/|\/$/g;

    server.post(apiPrefix + '/load_average_stores', function(req, res, next) {

        db.judges_grade.findAll({
            where: {
                studentId: req.params.studentId,
                judgeId: req.params.judgeId
            }
        }).then(function(judge_grades){
            res.json(judge_grades);
        });
        next();
    });

    return epilogue.resource({
        model: db.judges_grade,
        endpoints: [apiPrefix + '/load_average_stores'] //TODO: create a controller and change this
    });
};
