const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function loginAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });

        if (admin) {
            const unhashedPass = await bcrypt.compare(password, admin.hashedPass);

            if (unhashedPass) {
                req.session.admin = admin;
                res.redirect('/admin');
            } else {
                res.send(`
                <script>
                alert('Невалидни данни');
                window.location.href = '/login';
                </script>
                `)
            }
        }else {
            res.send(`
                <script>
                alert('Невалидни данни');
                window.location.href = '/login';
                </script>
                `)
        }
    }catch(e){
        console.log(e);
    }
}
module.exports = { loginAdmin }
    