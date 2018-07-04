const TaskService = require('./taskServiceController');

var apiTaskController = {};
//Retrieve all tasks
//Redundant but added just in case user type the "/tasks" route; generally though user
//will see all tasks from the home page using route "/"
apiTaskController.readAll = function(req, res, next) {
    TaskService.list()
    .then((tasks)=> {
        res.status(200);
        //res.json(tasks); //No need to separately declare 'Content-type':'application/json' in this case
        res.send(JSON.stringify(tasks));
    })
}

//Retrieve a task from ID
apiTaskController.readById = function (req, res, next) {
    TaskService.read(req.params.id)
        .then((task)=> {
            res.status(200);
            res.send(JSON.stringify(task));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        })
};

//Create a new task
apiTaskController.create =  function (req,res,next) {
    var task = {
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignee: req.body.assignee
    };
    //console.log(task);
    TaskService.create(task)
        .then((savedTask) =>  {
            res.status(201);
            res.send(JSON.stringify(savedTask));
        })
        .catch((err) => {
            console.log(err);
            throw new error('taskSaveError', task);
        });
};

//Update a task
apiTaskController.update = function (req, res, next) {
    let task = req.body;
    TaskService.update(req.params.id, task)
        .then((updatedTask) => {
            res.status(200);
            res.send(JSON.stringify(updatedTask));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
};


//Delete a task
apiTaskController.delete = function (req, res, next) {
    TaskService.delete(req.params.id)
        .then((taskToBeDeleted) => {
            res.status(200);
            res.send(JSON.stringify(taskToBeDeleted));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
};


module.exports = apiTaskController;