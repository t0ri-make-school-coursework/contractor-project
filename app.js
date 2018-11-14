// INITIALIZE LIBRARIES
const express = require('express')
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


const app = express()

// CONNECT TO MONGOOSE
mongoose.connect('mongodb://localhost/contractor');

// MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Project = mongoose.model('Project', {
  title: String,
  date: String
});

// ROUTES
app.get('/', (req, res) => {
    Project.find()
        .then(reviews => {
            res.render('projects-index', { reviews: reviews });
        })
        .catch(err => {
            console.log(err);
        })
})


// SERVER
app.listen(port);
