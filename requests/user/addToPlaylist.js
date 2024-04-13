const mongoose = require('mongoose');
const Added = require('../../models/AddedMusic');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function addToPlaylist(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { playlists, title, singer, ganre, URL } = req.body;

    try {
        const added = new Added({ playlists, title, singer, ganre, URL });
        await added.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { addToPlaylist };