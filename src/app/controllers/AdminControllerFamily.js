class AdminControllerFamily {
    
    //[GET] /admin/family
    home(req, res) {
        res.render('family');
    }
    
}

module.exports = new AdminControllerFamily();
