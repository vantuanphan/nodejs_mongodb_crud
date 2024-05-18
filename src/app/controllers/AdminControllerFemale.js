class AdminControllerFemale {
    
    //[GET] /admin/female
    home(req, res) {
        res.render('female');
    }
    
}

module.exports = new AdminControllerFemale();
