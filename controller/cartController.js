
const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users','categories']);


const cartController = (req, res) => {
    let user = req.session.user;
    let numOfItems = req.session.cart.length;
    let products = [];
    let cartArray = req.session.cart;
    if(req.params.productid){
        const index = cartArray.indexOf(parseInt(req.params.productid));
        if (index > -1) {
            cartArray.splice(index, 1);
        }
    }
    db.categories.aggregate([{"$match": {"products._id": {$in: cartArray}}}, {$unwind: "$products"}, {"$match" : {"products._id": {"$in": cartArray }}}],(err,docs) =>{
        docs.forEach(element => {
            products.push(element.products)
        });
        if(user){
            let name = user.name;
            res.render('cartPage',{name,numOfItems,products})
        }else{
            let defaultValue = 'Sign in';
            res.render('cartPage',{name: defaultValue,numOfItems:numOfItems,products:products})
        }
    })
}

module.exports = cartController;