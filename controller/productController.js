const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users','categories']);


const productController = (req,res) => {
    db.categories.find({_id: req.params.categoryid},(err,doc) => {
        if(typeof doc[0] == 'undefined'){
            res.render('errorPage',{message:'can not load products for this page'})
            return;
        }
        if(err || !doc[0].hasOwnProperty('products') || doc[0].length===0){
            res.render('errorPage',{message:'can not load products for this page'})
        }else{
            let category = doc[0];
            let numOfItems = req.session.cart.length;
            let user = req.session.user;
            if(user){
                let name = user.name;
                res.render('productsPage',{name,category:category, numOfItems:numOfItems})
            }else{
                let defaultValue = 'Sign in';
                res.render('productsPage',{name: defaultValue,category:category,numOfItems:numOfItems})
            }
        } 
    })  
}   
let subcategories = [];
const productControllerChecked = (req,res) => {
    let subcategoryid = req.body.subcategoryid || false;
    let categoryid = req.body.categoryid || false;
    if(subcategoryid && categoryid){
        return {subcategoryid,categoryid};
    }
}


const returnCheckedCategories = (req,res,datas) => {
    let index = subcategories.indexOf(datas.subcategoryid);
    if(index>=0){
        subcategories.splice(index, 1);
    }else{
        subcategories.push(datas.subcategoryid);
    }
    db.categories.aggregate([{"$match":{"_id":datas.categoryid}},{$unwind: "$products"},{"$match": {"products.category":{"$in":subcategories}}}],(err,docs) =>{
        let data = { 
            _id: docs[0]._id,
            name: docs[0].name,
            subcategories: docs[0].subcategories,
            products: []
        }
        docs.forEach(element => {
            data.products.push(element.products)
        });
        if (data.subcategories) {
            for (let i = 1; i < data.subcategories.length; i++) {
                if (subcategories.indexOf(data.subcategories[i].name)>=0) {
                    data.subcategories[i].checked = 'true';
                }
            }
        }
        let numOfItems = req.session.cart.length;
        let user = req.session.user;
        if(user){
            let name = user.name;
            res.render('productsPage',{name,category:data, numOfItems:numOfItems})
        }else{
            let defaultValue = 'Sign in';
            res.render('productsPage',{name: defaultValue,category:data,numOfItems:numOfItems})
            
        }
    })
}


module.exports.productController = productController;
module.exports.productControllerChecked = productControllerChecked;
module.exports.returnCheckedCategories = returnCheckedCategories;