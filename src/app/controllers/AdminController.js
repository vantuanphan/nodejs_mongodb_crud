class AdminController {
    //[GET] /admin
    home(req, res) {
        res.render('home');
    }

    //[GET] /admin/create
    create(req, res) {
        res.render('create');
    }

    //[GET] /admin/show
    show(req, res) {
        res.render('show');
    }

    //[GET] /admin/trash
    trash(req, res) {
        res.render('trash');
    }
}

module.exports = new AdminController();
