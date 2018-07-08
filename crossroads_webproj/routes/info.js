var express = require('express');
var router = express.Router();
var flash = require('express-flash');
var pages = require('../controllers/pageController');

router.use(flash());

/** 
 * Display the info page. 
 */
router.get('/', pages.readInfo);

module.exports = router;
