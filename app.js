import express from 'express';
import path from 'path';
import ejs from 'ejs';

require('dotenv').config();

let app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// Use the EJS rendering engine for HTML located in /views
app.set('views', __dirname + '/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// Host static files on URL path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

// endpoint for getting the Zomato API key
app.get('/restoKey', (req, res) => {
  console.log(process.env.API_KEY)
  res.send(process.env.API_KEY);
});

// endpoint for getting the Edamam API key
app.get('/recipeKey', (req, res) => {
  console.log(process.env.APP_ID);
  res.send({
    id: process.env.APP_ID,
    key: process.env.APP_KEY
  })
})

// Start server
app.listen(app.get('port'), () => {
  console.log(`Express game server listening on port ${port}`);
});
