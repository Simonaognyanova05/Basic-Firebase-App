const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/blog_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function registerAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const existedAdmin = await Admin.findOne({ username });

        if (existedAdmin) {
            return res.status(409).json();
        }
        const hashedPass = await bcrypt.hash(password, 10);

        const admin = new Admin({
            username,
            hashedPass
        });

        await admin.save();
        return res.status(200).json({ _id: admin._id, username: admin.username });
    } catch (e) {
        throw e;
    }
}

module.exports = { registerAdmin };