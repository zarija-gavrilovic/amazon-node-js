const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/:categoryid', (req,res)=> {productController.productController(req,res)});

let datas = null;
router.post('/checkedItems', (req,res)=>{
    datas = productController.productControllerChecked(req,res)
    if(datas){
        res.send('ok')
    }
});

router.get('/checked/categories', (req,res)=>{
    productController.returnCheckedCategories(req,res,datas)
});

router.post('/:categoryid/add_to_cart/:productid',(req,res) => {
    if(!req.session.hasOwnProperty('cart')){
        req.session.cart = [];
        req.session.cart.push(parseInt(req.params.productid))
    }else{
        req.session.cart.push(parseInt(req.params.productid))
    }
    res.redirect('/card/'+req.params.categoryid);
})

module.exports = router;