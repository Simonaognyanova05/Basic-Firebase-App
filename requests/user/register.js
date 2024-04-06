const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function registerUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password, rePass, email, profileImg } = req.body;

    if (password != rePass) {
        res.send(`<script>
        
        alert('Паролите не съвпадат!');
        window.location.href = '/register';
        </script>`);
        return;
    }
    if (password.length < 6) {
        res.send(`<script>
        
        alert('Паролата трябва да е минимум 6 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    }
    if (username.length < 5) {
        res.send(`<script>
        
        alert('Потребителското име трябва да е минимум 5 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);
    try {
        const user = new User({
            username, email, hashedPass, profileImg
        })
        await user.save();
        req.session.user = user;
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { registerUser };