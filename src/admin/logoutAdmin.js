module.exports = (req, res) => {
    delete req.session.admin;
    res.redirect('/admin')
}