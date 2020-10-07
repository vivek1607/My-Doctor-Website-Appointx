const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appointX');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to db'));
db.once('open', function(){
    console.log("Succesfully connected to database");
});

module.exports = db;
