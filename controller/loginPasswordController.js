const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users']);

// -> viwes/loginPage.ejs
const loginPasswordController = (req, res) => {
    let password = req.body.password;
    let email = req.body.email

    if (password) {
        db.users.find({ email: email }, (err, docs) => {
            if (docs.length === 1) {
                let user = docs[0];
                if (password === user.password) {
                    req.session.user = user;
                    // -----------------------------------------------
                    res.redirect('/')
                } else {
                    message = 'Incorrect password!'
                    res.render('errorPage', { message })
                }
            } else if (docs.length === 0) {
                //password is not valid
                message = 'password is not valid or does not exist';
                res.render('errorPage', { password })
            } else {
                //Fatal Error (exist more than 1 same emails!)
                message = 'Fatal Error (exist more than 1 same emails!)'
                res.render('errorPage', { message })
            }
        })
    }
}

module.exports = loginPasswordController;