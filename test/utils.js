// 'use strict'
// var mongoose = require('mongoose');
// var connectionThing = require('./../Server/Nurse/nurseMdl')

// var connector = connectionThing.connector

// beforeEach(function(done) {
// 	function clearDB() {
// 		//console.log('CONNNNNNNNN', connector.connections[0].collections.nurses.collection.db)
// 		for(var i in mongoose.connection.collections) {
// 			connector.collection[i].remove(function(){})
// 		}
// 		return done;
// 	}

// 	 if (mongoose.connection.readyState === 0) {
//     mongoose.connect(config.db.test, function (err) {
//       if (err) {
//         throw err;
//       }
//       return clearDB();
//     });
//   } else {
//     return clearDB();
//   }
// });

// afterEach(function (done) {
//   mongoose.disconnect();
//   return done();
// });

// module.exports = beforeEach;

