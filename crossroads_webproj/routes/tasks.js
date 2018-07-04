var express = require('express');
var router = express.Router();
var tasks = require('../controllers/taskController');

//Retrieve list of current tasks
//Redundant but added just in case user type the "/tasks" route, generally user
//will see all tasks from the home page using route "/"
router.get('/', tasks.readAll);

//Display form to create a new task
router.get('/create', tasks.displayForm);

//Add the new task
router.post("/create", tasks.create);

//Get a task to update
router.get("/update/:taskid", tasks.readById);

//Update the task
router.post("/update/:taskid", tasks.update);

//Get a task to delete
router.get("/delete/:taskid", tasks.readByIdToDelete);

//Delete a task
router.post("/delete/:taskid", tasks.delete);

router.get('/apitest', tasks.apitest);

//If none matches above
router.use(function(err, req, res, next){
    console.error(err.stack);
    next(err);
});

module.exports = router;
