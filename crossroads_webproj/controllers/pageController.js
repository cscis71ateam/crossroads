const fetch = require('node-fetch');

var pageController = {};

//Retrieve all tasks
pageController.readAll = function(req, res, next) {
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

module.exports = pageController;