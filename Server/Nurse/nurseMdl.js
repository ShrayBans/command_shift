const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var connector = mongoose.connect('mongodb://localhost/db');

// make beds value and object, to add notes

const nurseSchema = new Schema({
  first: String,
  last: String,
  beds: Array
});

const nurse = mongoose.model('nurse', nurseSchema);

module.exports = { nurse, connector };
