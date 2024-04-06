const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    singer: { type: String, required: true },
    ganre: { type: String, required: true },
    URL: { type: String, required: true },
})

const Music = new mongoose.model('Music', musicSchema);

module.exports = Music;