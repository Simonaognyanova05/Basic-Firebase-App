module.exports = (req, res) => {
    res.render('admin/addMusic', {title: 'Добавяне на музика | Админ', layout: 'mainAdmin'})
}