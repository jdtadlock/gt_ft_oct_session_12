var User = require('../models/User');

module.exports = {
	create: function(data, res) {
		User.create(data, function(err, result) {
			if ( err ) return console.log(err);

			res.send({user: result});
		});
	}
}