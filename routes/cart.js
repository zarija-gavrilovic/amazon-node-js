const express = require('express');
const router = express.Router();


router.get('/',require('../controller/cartController'))
router.get('/:productid',require('../controller/cartController'))

router.post('/buy',(req,res) => {
    //Send to database.
    let total = req.body.total;
    let cart = console.log(req.body.cart);
    req.session.cart = [];
    res.redirect('/')
})




module.exports = router;