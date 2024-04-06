const Handlebars = require('handlebars');
const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const homeController = require('./src/home');
const artistsController = require('./src/artists');
const loginController = require('./src/login');
const registerController = require('./src/register');
const playlistsController = require('./src/yourPlaylists');
const profileController = require('./src/profile');



const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({    
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));
Handlebars.registerHelper('eq', (a, b) => a == b);


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/content', express.static('static'));

app.get('/', homeController);
app.get('/artists', artistsController);
app.get('/login', loginController);
app.get('/register', registerController);
app.get('/yourPlaylists', playlistsController);
app.get('/profile', profileController);

app.listen(3000);