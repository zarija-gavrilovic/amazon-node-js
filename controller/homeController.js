const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users','categories']);


const homeController = (req,res) => {
    if(!req.session.hasOwnProperty('cart')){
        req.session.cart = [];
    }
    
    db.categories.find({},(err,categories) => {
        for(let i = 0; i< categories.length; i++){
            categories[i].url = categories[i].name.replace(/ /g,"_");
        }
        if(err){
            let message = 'Error while loading DB homePage categories'
            res.render('errorPage',{message})
        }else{
            let user = req.session.user;
            let numOfItems = req.session.cart.length;
            if(user){
                res.render('homePage',{name:user.name,categories:categories,numOfItems:numOfItems})
            }else{
                res.render('homePage',{name: 'Sign in',categories:categories,numOfItems:numOfItems})
            }
        }
    })
}

module.exports = homeController;