module.exports = (req, res) => {
    res.render('user/home', {title: 'Начална страница', user: req.session.user})
}