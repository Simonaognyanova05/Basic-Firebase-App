const mongoose = require('mongoose');
const Topic = require('../models/Topic');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/blog_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getTopics(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const topics = await Topic.find({});

        return topics;
    } catch (e) {
        throw e;
    }
};

module.exports = { getTopics };