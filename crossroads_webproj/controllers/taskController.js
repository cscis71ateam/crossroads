const fetch = require('node-fetch');


var taskController = {};
//Retrieve all tasks
//Redundant but added just in case user type the "/tasks" route; generally though user
//will see all tasks from the home page using route "/"
taskController.readAll = function(req, res, next) {
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks';
    try {
        fetch(url, {method: 'GET'})
        .then(function(response) {
            return response.json();
        })
        .then(function(tasks) {
            res.render("index", {
                taskList: tasks,
                flashMsgSuccess: req.flash("oprSuccessfull"),
                flashMsgError: req.flash("oprError")
            });
        });
    } catch (err){
        console.log(err);
        res.end('Oops! Something went wrong. Please, try again.');
    }
}

//Display form to create a new task
taskController.displayForm = function(req, res, next) {
    res.render('../views/tasks/create', { title: 'Add a new task' });
};

//Create a new task
taskController.create =  function (req,res,next) {
    var newTask = {
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      assignee: req.body.assignee
    };
    
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks/';
    try {
        fetch(url,{
                    method: 'POST', 
                    body: JSON.stringify(newTask),
                    headers: {
                        'content-type': 'application/json'
                    },
        })
        /*.then(function(response) {
            return response.json();
        })*/
        .then(function() {
            req.flash("oprSuccessfull","Task has been added successfully.");
            res.redirect('/');
        });
    } catch (err){
        console.log(err);
        req.flash("oprError","Oops! Something went wrong! Please, try again.");
        res.redirect('/');
    }
};

//Retrieve a task from ID
taskController.readById = function (req, res, next) {
    var taskId = req.params.taskid;
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks/' + taskId;
    try {
        fetch(url, {method: 'GET'})
        .then(function(response) {
            return response.json();
        })
        .then(function(task) {
            res.render("../views/tasks/update", {
                task: task
            });
        });
    } catch (err){
        console.log(err);
        flashMsgError: req.flash("oprError", "Oops! Something went wrong! Please, try again.");
        res.redirect('/');
    }
};

//Update a task
taskController.update = function (req, res, next) {

    var taskId = req.params.taskid;
    var updateTask = {
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignee: req.body.assignee
    }
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks/' + taskId;

    try {
        fetch(url,{
                    method: 'PUT', 
                    body: JSON.stringify(updateTask),
                    headers: {
                        'content-type': 'application/json'
                    },
        })
        /*.then(function(response) {
            return response.json();
        })*/
        .then(function() {
            req.flash("oprSuccessfull","Task has been updated successfully.");
            res.redirect('/');
        });
    } catch (err){
        console.log(err);
        flashMsgError: req.flash("oprError", "Oops! Something went wrong! Please, try again.");
        res.redirect('/');
    }
};

//Retrieve a task from ID to delete
taskController.readByIdToDelete = function (req, res, next) {
    var taskId = req.params.taskid;
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks/' + taskId;
    try {
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(task) {
            res.render("../views/tasks/delete", {
                task: task
            });
        });
    } catch (err){
        console.log(err);
        flashMsgError: req.flash("oprError", "Oops! Something went wrong! Please, try again.");
        res.redirect('/');
    }
};

//Delete a task
taskController.delete = function (req, res, next) {
    
    var taskId = req.params.taskid;
    var host = 'http://' + req.headers.host;
    var url = host + '/api/tasks/' + taskId;

    try {
        fetch(url,{method: 'DELETE'})
        /*.then(function(response) {
            return response.json();
        })*/
        .then(function() {
            req.flash("oprSuccessfull","Task has been deleted successfully.");
            res.redirect('/');
        });
    } catch (err){
        console.log(err);
        flashMsgError: req.flash("oprError", "Oops! Something went wrong! Please, try again.");
        res.redirect('/');
    }
};

//Test APIs
taskController.apitest = function(req, res, next) {
    res.render('apitest', { title: 'Test the REST APIs' });
  }

module.exports = taskController;

