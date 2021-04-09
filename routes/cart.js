const express = require('express');
const router = express.Router();


router.get('/',require('../controller/cartController'))
router.get('/:productid',require('../controller/cartController'))

router.post('/buy',(req,res) => {
    //Send to database.
    req.session.cart = [];
    res.redirect('/')
})




module.exports = router;