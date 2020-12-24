const mongojs = require('mongojs');
const db = mongojs('amazon_nodejs', ['users','categories']);

const prikazi =  () => {
    // console.log('-----------------------------------------');
    db.categories.find({},(err,allCategories) => {
        // for(let i = 0; i<allCategories.length;i++){
            //console.log('Number of collectoins: ',JSON.stringify(allCategories[i].name));

            // db.proba.insert({
            //     name:allCategories[i].name,
            //     img:allCategories[i].img, 
            //     subcategories :allCategories[i].subcategories,
            //     products: allCategories[i].products
            // })
        // }
        


        let z = 1;
        for(let i = 0; i<allCategories.length;i++){
            // console.log(i,' : ',allCategories[i].length);
            // console.log(i,' : ',allCategories[i].products.length);
            
            // allCategories[i].products = [];
            allCategories[i].productsid = [];
            //allCategories[i].products.push('a')
            // console.log(allCategories[i]);
            for(let j = 0; j<allCategories[i].products.length;j++){
                let object = allCategories[i].products[j];
                object._id = z;
                z++;
                //console.log(object);
                allCategories[i].productsid.push(object);
               
            }
            let obj = allCategories[i];
            db.my.insert({obj},(err,res) => console.log('OK'));
            delete allCategories[i].products
            console.log('--------------------------------------------------------');
            //console.log(allCategories[i]);
            console.log('--------------------------------------------------------');

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