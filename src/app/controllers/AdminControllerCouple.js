class AdminControllerCouple {
    
    //[GET] /admin/couple
    home(req, res) {
        res.render('couple');
    }
    
}

module.exports = new AdminControllerCouple();
