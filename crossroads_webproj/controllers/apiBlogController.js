const BlogService = require('./blogServiceController');

var apiBlogController = {};
//Retrieve all blogs
apiBlogController.readAll = function(req, res, next) {
    BlogService.list()
    .then((blogs)=> {
        res.status(200);
        //res.json(blogs); //No need to separately declare 'Content-type':'application/json' in this case
        res.send(JSON.stringify(blogs));
    })
}

//Retrieve a blog from ID
apiBlogController.readById = function (req, res, next) {
    BlogService.read(req.params.id)
        .then((blog)=> {
            res.status(200);
            res.send(JSON.stringify(blog));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        })
};

//Create a new blog
apiBlogController.create =  function (req,res,next) {
    var blog = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        image_file_name: req.body.image_file_name,
        published: 1,
        create_dt: new Date(),
        publish_dt: new Date(),
        update_dt: new Date()
    };
    //console.log(blog);
    BlogService.create(blog)
        .then((savedBlog) =>  {
            res.status(201);
            res.send(JSON.stringify(savedBlog));
        })
        .catch((err) => {
            console.log(err);
            throw new error('blogSaveError', blog);
        });
};

//Update a blog
apiBlogController.update = function (req, res, next) {
    let blog = req.body;
    BlogService.update(req.params.id, blog)
        .then((updatedBlog) => {
            res.status(200);
            res.send(JSON.stringify(updatedBlog));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
};


//Delete a blog
apiBlogController.delete = function (req, res, next) {
    BlogService.delete(req.params.id)
        .then((blogToBeDeleted) => {
            res.status(200);
            res.send(JSON.stringify(blogToBeDeleted));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
};


module.exports = apiBlogController;