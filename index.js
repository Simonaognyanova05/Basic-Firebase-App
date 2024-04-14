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
const newPlaylist = require('./src/user/newPlaylist');
const { registerUser } = require('./requests/user/register');
const { loginUser } = require('./requests/user/login');

const adminHomeController = require('./src/admin/home');
const adminLoginController = require('./src/admin/login');
const adminAddController = require('./src/admin/addAdmin');
const addMusicController = require('./src/admin/addMusic');
const { addAdmin } = require('./requests/admin/addAdmin');
const { loginAdmin } = require('./requests/admin/adminLogin');
const { addMusic } = require('./requests/admin/addMusic');
const { createPlaylist } = require('./requests/user/createPlaylist');
const logout = require('./src/user/logout');
const logoutAdmin = require('./src/admin/logoutAdmin');
const addToPlaylistForm = require('./src/user/addToPlaylistForm');
const { addToPlaylist } = require('./requests/user/addToPlaylist');
const { searchMusic } = require('./requests/user/searchMusic');
const musicIntoPlaylist = require('./src/user/musicIntoPlaylist');

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
app.get('/artists', async(req, res) => {await artistsController(req, res)});
app.get('/login', loginController);
app.get('/register', registerController);
app.get('/yourPlaylists', playlistsController);
app.get('/profile', profileController);
app.get('/createPlaylist', newPlaylist);
app.post('/regitserReq', async(req, res) => {
    await registerUser(req, res);
});
app.post('/loginReq', async(req, res) => {
    await loginUser(req, res);
})
app.post('/createPlaylist', async(req, res) => {
    await createPlaylist(req, res);
});
app.get('/logout', logout);
app.get('/musics/video/:videoId', async(req, res) => { await addToPlaylistForm(req, res) })
app.post('/addMusicToPlaylist', async(req, res) => {
    await addToPlaylist(req, res);
});
app.post('/searchMusic', async(req, res) => {
    await searchMusic(req, res);
})
app.get('/findedMusic', async (req, res) => {
    await musicIntoPlaylist(req, res);
})

app.get('/admin', adminHomeController);
app.get('/admin/login', adminLoginController);
app.get('/admin/addAdmin', adminAddController);
app.get('/admin/addMusic', addMusicController);
app.get('/admin/logout', logoutAdmin);

app.post('/addAdmin', async (req, res) => {
    await addAdmin(req, res);
});
app.post('/adminLogin', async (req, res) => {
    await loginAdmin(req, res)
})
app.post('/addMusic', async(req, res) => {
    await addMusic(req, res);
})

app.listen(3000);