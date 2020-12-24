const express = require('express');
const router = express.Router();


// -> views/createNewAccPage.ejs
router.get('/', (req,res) => {
    res.render('createNewAccPage');
});

router.post('/createAccount', require('../controller/newAccountController'));





module.exports = router;