// INITIALIZE LIBRARIES
const express = require('express')
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;


const app = express()


// MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// ROUTES
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})


// SERVER
app.listen(port);
