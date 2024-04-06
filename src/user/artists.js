module.exports = (req, res) => {
    res.render('user/artists', {title: 'Артисти', user: req.session.user})
}