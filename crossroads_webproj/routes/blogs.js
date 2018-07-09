var express = require('express');
var router = express.Router();
var blogs = require('../controllers/blogController');

//Retrieve list of current blogs
//Redundant but added just in case user type the "/blogs" route, generally user
//will see all blogs from the home page using route "/"
router.get('/', blogs.readAll);

//Retrieve a blog by ID to view obly
router.get("/view/:blogid", blogs.readOnlyById);

//Display form to create a new blog
router.get('/create', blogs.displayForm);

//Add the new blog
router.post("/create", blogs.create);

//Get a blog to update
router.get("/update/:blogid", blogs.readById);

//Update the blog
router.post("/update/:blogid", blogs.update);

//Get a blog to delete
router.get("/delete/:blogid", blogs.readByIdToDelete);

//Delete a blog
router.post("/delete/:blogid", blogs.delete);

router.get('/apitest', blogs.apitest);

//If none matches above
router.use(function(err, req, res, next){
    console.error(err.stack);
    next(err);
});

module.exports = router;
