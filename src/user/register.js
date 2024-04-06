module.exports = (req, res) => {
    res.render('user/register', {title: 'Регистрация', user: req.session.user})
}