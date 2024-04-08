const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    ownerId: {type: String, required: true}
})

const Playlist = new mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;