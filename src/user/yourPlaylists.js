module.exports = (req, res) => {
    res.render('user/yourPlaylist', {title: 'Вашите плейлисти', user: req.session.user})
}