module.exports = (req, res) => {
    if (req.session.user) {
        res.render('user/home', {
            title: 'Начална страница',
            user: req.session.user
        })
    } else {
        res.render('user/login', {
            title: 'Влизане',
            user: req.session.user,
        })
    }
}