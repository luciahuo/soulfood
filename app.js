require('dotenv').config();
import express from 'express';
import path from 'path';
import ejs from 'ejs';

let app = express();
const port = process.env.PORT || 3000;

var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var User = require('./User');

app.set('port', port);

// Use the EJS rendering engine for HTML located in /views
app.set('views', __dirname + '/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(cookieSession({
  secret: 'SHHKey'
}));

// use the bodyparser
app.use(bodyParser.urlencoded({extended: false}));

// Host static files on URL path
app.use(express.static(path.join(__dirname, 'public')));

// endpoint for front page
app.get('/', (req,res) => {
  // see if the user is a returning user
  if (req.session.username && req.session.username !== '') {
    res.redirect('/protected');
  } else {
    res.redirect('/login');
  }
});

// login
app.post('/login', (req,res) => {
  username = req.body.username;
  password = req.body.password;
  User.checkIfExisting(user, password, function(err, isRight) {
    if (err) {
      res.send('Error!' + err);
    } else {
      if (isRight) {
        req.session.username = username;
        res.redirect()
      }
    }
  })
});

app.get('/logout', function(req, res) {
  req.session.username = '';
  res.render('logout');
});

// endpoint for getting the Zomato API key
app.get('/restaurantKey', (req, res) => {
  res.send({key: process.env.API_KEY});
});

// endpoint for getting the Edamam API key
app.get('/recipeKey', (req, res) => {
  res.send({
    id: process.env.APP_ID,
    key: process.env.APP_KEY
  });
});

// protected page
app.get('/protected', (req, res) => {
  if (!req.session.username || req.session.username == '') {
    res.send('this page is protected!');
  } else {
    res.render('index', {username: req.session.username});
  }
});

// Start server
app.listen(app.get('port'), () => {
  console.log(`Express game server listening on port ${port}`);
});
