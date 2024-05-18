const Male = require('../models/Male');

class AdminControllerMale {
    
    //[GET] /admin/male
    home(req, res, next) {
        res.render('male');
    }

}

module.exports = new AdminControllerMale();
