var express = require('express');
var router = express.Router();
var tasks = require('../../controllers/apiTaskController');

const TaskService = require('../../controllers/taskServiceController');

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

//List all tasks
router.get('/', tasks.readAll);

//Find a task by id
router.get('/:id', tasks.readById); 

//Create a new task
router.post("/", tasks.create); 

//Update a task
router.put('/:id', tasks.update); 

//Delete a task
router.delete('/:id', tasks.delete); 

module.exports = router;