const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app',{
	useUnifiedTopology: true,
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
})
	.then(db => console.log('DB is connected'))
	.catch(err=> console.error(err));
