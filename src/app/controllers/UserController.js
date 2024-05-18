const Male = require('../models/Male');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class UserController {

    //[GET] /
    home(req, res, next) {
        Male.find({})
            .then(male_user => {
                res.render('home_user', { 
                    male_user: mutipleMongooseToObject(male_user)
                });
            })
            .catch(next);
    }

}

module.exports = new UserController();
