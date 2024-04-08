const mongoose = require('mongoose');
const Playlist = require('../../models/Playlist');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getPlaylists(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const ownerId = req.session.user._id;

    try {
        const playlists = (await Playlist.find({ ownerId })).map(x => x.toJSON());
        return playlists;
    } catch (e) {
        console.log(e);
    }
}
module.exports = { getPlaylists }