const { getPlaylists } = require('../../requests/user/getPlaylist');
const { getSpecificMusic } = require('../../requests/user/getSpecificMusic');

module.exports = async (req, res) => {
    const playlists = await getPlaylists(req, res);
    const specificMusic = await getSpecificMusic(req, res);
    res.render('user/addToPlaylistForm', { title: 'Добавяне в плейлист', user: req.session.user, playlists, specificMusic })
}