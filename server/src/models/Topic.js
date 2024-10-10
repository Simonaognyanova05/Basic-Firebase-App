const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    img: { type: String, require: true },
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;