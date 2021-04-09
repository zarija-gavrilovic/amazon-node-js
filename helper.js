const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users','categories']);

const prikazi =  () => {
    db.categories.find({},(err,allCategories) => {     
        let z = 1;
        for(let i = 0; i<allCategories.length;i++){
            
            allCategories[i].productsid = [];
            for(let j = 0; j<allCategories[i].products.length;j++){
                let object = allCategories[i].products[j];
                object._id = z;
                z++;
                allCategories[i].productsid.push(object);
               
            }
            let obj = allCategories[i];
            db.my.insert({obj},(err,res) => console.log('OK'));
            delete allCategories[i].products

        }
    })
}

const json = (req,res) => {
    db.categories.find({},(err,docs)=>{
        res.send(docs)
    })
}

module.exports.json = json;

module.exports.prikazi = prikazi;
