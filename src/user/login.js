module.exports = (req, res) => {
    res.render('user/login', {title: 'Влизане', user: req.session.user})
}