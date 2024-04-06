module.exports = (req, res) => {
    if (req.session.admin) {
        res.render('admin/home', { title: 'Начало | Админ', layout: 'mainAdmin', admin: req.session.admin });
    } else {
        res.render('admin/login', { title: 'Влизане | Админ', layout: 'mainAdmin', admin: req.session.admin })
    }
}