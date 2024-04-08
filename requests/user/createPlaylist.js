const mongoose = require('mongoose');
const Playlist = require('../../models/Playlist');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createPlaylist(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const { title } = req.body;

    try{
        const playlist = new Playlist({
            title, ownerId: req.session.user._id
        })

        await playlist.save();
        res.redirect('/createPlaylist');
    }catch(e){
        console.log(e);
    }
}

module.exports = { createPlaylist };