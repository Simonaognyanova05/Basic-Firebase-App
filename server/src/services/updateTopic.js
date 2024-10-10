const mongoose = require('mongoose');
const Topic = require('../models/Topic');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/blog_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function updateTopic(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, description, img } = req.body;
    let topicId = req.params.topicId;

    try {
        await Topic.findByIdAndUpdate({ _id: topicId }, { $set: { title, description, img } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { updateTopic };