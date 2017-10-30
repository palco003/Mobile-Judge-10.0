/*var epilogue = require('epilogue'),
	badRequest = require('restify').errors.BadRequestError,
	crypt = require('../utils/crypt.js'),
	config = require('../config/server.json'),
	fs = require('fs'),
	_ = require('lodash');


module.exports = function(server, db) {

	var retrieveEmail = function(invite) {
		var sentId = crypt.decrypt(invite.toUpperCase()).split(','),
			emailId = sentId[0], createdAt = new Date(parseInt(sentId[1]));
		return Promise.all([
			db.email.findOne({
				where: {
					id: emailId,
					createdAt: createdAt
				}
			}),
			db.term.getActiveTerm()
		]);
	};

	var response ='<!DOCTYPE html>' +
			'<html lang="en">' +
			'<head>' +
				'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
				'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">' +
				'<meta charset="utf-8">' +
				'<title>[[subject]]</title>' +
				'<!--[if lt IE 9]>' +
				'<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>' +
				'<![endif]-->' +
			'</head>' +
			'<body>[[body]]</body>' +
			'</html>';

	//server.get(apiPrefix + '/invite/:id/accept', function (req, res, next) {
	var regis = function(req, res, next){
		retrieveEmail(req.params.id)
		.then(function(ret) {
				var email = ret[0], term = ret[1];
	//			if (email == null || email.termId != term.id) return next(new notFound('Invalid invite id'));

				db.user.findById(email.userId).then(function (user) {
					//if (user.state <= 2) setState(user, 4);

					var script = '<script type="text/javascript">' +
						'localStorage.setItem("userId", ' + JSON.stringify(user.id) + ');' +
						'localStorage.setItem("email", ' + JSON.stringify(user.email) +');' +
						(user.fullName ? 'localStorage.setItem("userName", ' + JSON.stringify(user.fullName) +');' : 'localStorage.removeItem("userName");') +
						'window.location.replace("' + config.registerRedirect + '");' +
					'</script>';

					res.html(response
							.replace(/\[\[subject\]\]/, 'Please wait...')
							.replace(/\[\[body\]\]/, script));
					next();
					//db.touch(email);
				});
		});
	};
};*/




