module.exports = (req, res) => {
    res.render('admin/addAdmin', {title: 'Добавяне на администратор | Админ', layout: 'mainAdmin', admin: req.session.admin})
}