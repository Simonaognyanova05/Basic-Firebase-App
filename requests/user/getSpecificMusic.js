const mongoose = require('mongoose');
const Music = require('../../models/Music');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getSpecificMusic(req, res) {
    await mongoose.connect(dbUrl, connectionParams);
    try {
        const specificMusic = (await Music.findById(req.params.videoId)).toJSON();
        return specificMusic;
    } catch (e) {
        console.log(e);
    }
}
module.exports = { getSpecificMusic }