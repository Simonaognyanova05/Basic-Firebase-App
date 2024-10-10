const mongoose = require('mongoose');
const Topic = require('../models/Topic');
const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/blog_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function createTopic(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, description, img } = req.body;

    try {
        const topic = new Topic({
            title, description, img
        });

        await topic.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { createTopic };
