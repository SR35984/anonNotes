var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	content: {
		type: String,
		required: [true, 'Content is required.']
	}
});

module.exports = mongoose.model('Note', NoteSchema);