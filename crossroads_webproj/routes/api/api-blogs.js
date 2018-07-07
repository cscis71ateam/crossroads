var express = require('express');
var router = express.Router();
var blogs = require('../../controllers/apiBlogController');

const blogService = require('../../controllers/blogServiceController');

//Cross Origin Resource Sharing, Content Type and other common configurations
router.use((req, res, next) => {
    res.set({
        //Allow access from any domain
        'Access-Control-Allow-Origin':'*',
        
        // Allow particular methods and headers for 'preflight'
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
        
        //Declare content type
        'Content-type':'application/json'
      });
      
      //If this is a preflight, just send the response with headers, no need to go further.
      if(req.method == 'OPTIONS'){
        return res.status(200).end();
      }

    next();
});

//List all blogs
router.get('/', blogs.readAll);

//Find a blog by id
router.get('/:id', blogs.readById); 

//Create a new blog
router.post("/", blogs.create); 

//Update a blog
router.put('/:id', blogs.update); 

//Delete a blog
router.delete('/:id', blogs.delete); 

module.exports = router;