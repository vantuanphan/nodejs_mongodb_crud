class AdminController {

    //[GET] /admin
    home(req, res) {
        res.render('home');
    }

}

module.exports = new AdminController();
