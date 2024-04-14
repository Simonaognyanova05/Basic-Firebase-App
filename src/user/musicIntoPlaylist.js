const { searchMusic } = require('../../requests/user/searchMusic');

module.exports = async (req, res) => {
    const findedMusic = await searchMusic(req, res);
    res.render('user/musicIntoPlaylist', { title: 'Вашият плейлист', user: req.session.user, findedMusic })
}