const express =  require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(expressLayouts);

app.use(express.static('assests'));
app.use(express.urlencoded());
app.use('/', require('./router'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// app.get('/', function(req, res){
//     return res.render('home');
// });

app.listen(port, function(){
    console.log("My server is up and running on port: ",port);
});
