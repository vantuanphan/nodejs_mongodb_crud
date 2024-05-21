const Male = require('../models/Male');
const Female = require('../models/Female');

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

        Female.find({})
            .then(female_user => {
                res.render('home_user', { 
                    female_user: mutipleMongooseToObject(female_user)
                });
            })
            .catch(next);
    }

    //[GET] /slug
    view_details

}

module.exports = new UserController();
