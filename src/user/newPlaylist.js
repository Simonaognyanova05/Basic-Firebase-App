module.exports = (req, res) => {
    res.render('user/newPlaylist', {title: 'Създаване на нов плейлист', user: req.session.user})
}