const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs',['users']);

// -> viwes/loginPage.ejs
const loginController = (req,res) => {
    let email = req.body.email;
    if(email){
        db.users.find({email:email},(err,docs) => {
            
            if(docs.length !== 0){
                //email is valid
                console.log(req.session);
                res.render('login/passwordPage',{email})
            }else{
                //email is not valid
                message = 'Email is not valid'
                res.render('errorPage',{message})
            }
        })
        
    }
    
}

module.exports = loginController;