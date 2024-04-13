const mongoose = require('mongoose');

const addedSchema = new mongoose.Schema({
    playlists:{type: String, required: true},
    title:{type: String, required: true},
    ganre:{type: String, required: true},
    singer:{type: String, required: true},
    URL:{type: String, required: true},
})

const Added = new mongoose.model('Added', addedSchema);

module.exports = Added;