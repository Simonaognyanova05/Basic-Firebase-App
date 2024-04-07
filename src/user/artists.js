const { getMusics } = require('../../requests/user/getMusics');

module.exports = async (req, res) => {
    const musics = await getMusics(req, res);
    res.render('user/artists', {title: 'Артисти', user: req.session.user, musics: musics})
}