module.exports = (req, res) => {
    res.render('admin/home', {title: 'Начало | Админ', layout: 'mainAdmin', admin: req.session.admin})
}