module.exports = (req, res) => {
    res.render('user/createPlaylist', {title: 'Създаване на нов плейлист', user: req.session.user})
}