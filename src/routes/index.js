const adminRouter = require('./admin');
const maleRouter = require('./male');
const femaleRouter = require('./female');
const coupleRouter = require('./couple');
const childrenRouter = require('./children');
const familyRouter = require('./family');

const userRouter = require('./user');

function route(app) {
    app.use('/admin/male', maleRouter);
    app.use('/admin/female', femaleRouter);
    app.use('/admin/couple', coupleRouter);
    app.use('/admin/children', childrenRouter);
    app.use('/admin/family', familyRouter);

    app.use('/admin', adminRouter);

    app.use('/', userRouter);
}

module.exports = route;
