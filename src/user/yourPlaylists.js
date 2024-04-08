const { getPlaylists } = require('../../requests/user/getPlaylist');

module.exports = async (req, res) => {
    const playlists = await getPlaylists(req, res);
    res.render('user/yourPlaylist', {title: 'Вашите плейлисти', user: req.session.user, playlists})
}