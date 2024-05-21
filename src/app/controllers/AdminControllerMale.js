const Male = require('../models/Male');

class AdminControllerMale {
    
    //[GET] /admin/male
    home(req, res, next) {
        const home = new Male(req.body);
        home.save()
        .then(() => res.redirect('/admin'))
        
    }

    //[POST] /admin/male/create
     create(req, res, next) {
        res.render('maleCreate');
    }

}

module.exports = new AdminControllerMale();
