const mongoose = require('mongoose');
const Music = require('../../models/Music');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getMusics(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const music = (await Music.find({})).map(x => x.toJSON());
        return music;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getMusics };