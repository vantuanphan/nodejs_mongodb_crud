class AdminControllerChildren {
    
    //[GET] /admin/children
    home(req, res) {
        res.render('children');
    }
    
}

module.exports = new AdminControllerChildren();
