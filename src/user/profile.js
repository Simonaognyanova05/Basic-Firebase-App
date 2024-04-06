module.exports = (req, res) => {
    res.render('user/profile', {title: 'Вашият профил', user: req.session.user})
}