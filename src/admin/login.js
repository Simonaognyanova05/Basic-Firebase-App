module.exports = (req, res) => {
    res.render('admin/login', {title: 'Влизане | Админ', layout: 'mainAdmin'})
}