var express = require('express');
var router = express.Router();
var flash = require('express-flash');
var pages = require('../controllers/pageController');

router.use(flash());

/** 
 * GET home page with the blog list displayed. 
 */
router.get('/', pages.readAll);

module.exports = router;
