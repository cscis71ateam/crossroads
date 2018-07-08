const fetch = require('node-fetch');

var pageController = {};

//Retrieve all blogs
pageController.readAll = function(req, res, next) {
    var host = 'http://' + req.headers.host;
    var url = host + '/api/blogs';
    try {
        fetch(url, {method: 'GET'})
        .then(function(response) {
            return response.json();
        })
        .then(function(blogs) {
            res.render("index", {
                blogList: blogs,
                flashMsgSuccess: req.flash("oprSuccessfull"),
                flashMsgError: req.flash("oprError")
            });
        });
    } catch (err){
        console.log(err);
        res.end('Oops! Something went wrong. Please, try again.');
    }
}

pageController.readInfo = function(req, res, next) {
    var host = 'http://' + req.headers.host;
    //var url = host + '/api/infos';
    var url = host + '/api/blogs';
    try {
        fetch(url, {method: 'GET'})
        .then(function(response) {
            return response.json();
        })
        .then(function(blogs) {
            res.render("info", {
                blogList: blogs,
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