var mongoose = require('mongoose'),
	db_name = "anonNotes";

mongoose.connect(`mongodb://localhost/${db_name}`);