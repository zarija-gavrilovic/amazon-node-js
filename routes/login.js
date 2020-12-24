const express = require('express');
const router = express.Router();
//localhost:3000/loginPage



// -> viwes/loginPage.ejs
router.get('/', (req,res) => {
    res.render('login/loginPage')
})

// if email is valid
router.post('/email',require('../controller/loginController'))
router.post('/password',require('../controller/loginPasswordController'))

router.get('/errorPage',(req,res) =>{
    res.render('errorPage')
})

 


module.exports = router;