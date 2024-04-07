const mongoose = require('mongoose');
const Music = require('../../models/Music');

const dbUrl = 'mongodb://localhost:27017/music_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function addMusic(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const { title, singer, ganre, URL } = req.body;

    let URL1 = URL.split('=')[1];
    try{
        const music = new Music({
            title, singer, ganre, URL: URL1
        });

        await music.save();
        res.redirect('/admin');
    }catch(e){
        console.log(e);
    }
}

module.exports = { addMusic };