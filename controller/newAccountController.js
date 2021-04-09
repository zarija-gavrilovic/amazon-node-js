const mongojs = require("mongojs");
const db = mongojs("amazon_nodejs", ["users"]);

const newAccountController = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let re_password = req.body.re_password;
  if (name && password && password === re_password) {
    db.users.find({ email: email }, (err, emails) => {
      if (emails.length === 0) {
        db.users.insert({ name: name, email: email, password: password });
      } else {
        let message = "This email already exist!";
        res.render("errorPage", { message });
      }
    });
  } else {
  }
  //res.redirect('/loginPage')
};

module.exports = newAccountController;
