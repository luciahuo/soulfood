import express from 'express';
import path from 'path';
import ejs from 'ejs';

let app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// Use the EJS rendering engine for HTML located in /views
app.set('views', __dirname + '/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// Host static files on URL path
app.use(express.static(path.join(__dirname, 'public')));

// Use express Router middleware for root path
// app.use(app.router);

app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(app.get('port'), () => {
  console.log(`Express game server listening on port ${port}`);
});
