const mongoose = require('mongoose');
const Added = require('../../models/AddedMusic');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function searchMusic(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title } = req.body;

    try {
        const music = (await Added.find({ playlists: title })).map(x => x.toJSON());
        return music;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { searchMusic };