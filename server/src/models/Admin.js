const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    hashedPass: { type: String, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;