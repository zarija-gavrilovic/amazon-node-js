const express = require('express');
const router = express.Router();
router.use('/', require('./home'));

// -> routes/login.js
router.use('/loginPage', require('./login'))

router.use('/card', require('./product'));

router.use('/cart', require('./cart'))

router.use('/createNewAccount', require('./createNewAccount'))

router.use('/logout', require('./logout'))
 
module.exports = router;