const Handlebars = require('handlebars');
const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const homeController = require('./src/user/home');
const artistsController = require('./src/user/artists');
const loginController = require('./src/user/login');
const registerController = require('./src/user/register');
const playlistsController = require('./src/user/yourPlaylists');
const profileController = require('./src/user/profile');
const { registerUser } = require('./requests/register');
const { loginUser } = require('./requests/login');

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

app.post('/regitserReq', async(req, res) => {
    await registerUser(req, res);
});
app.post('/loginReq', async(req, res) => {
    await loginUser(req, res);
})
app.listen(3000);