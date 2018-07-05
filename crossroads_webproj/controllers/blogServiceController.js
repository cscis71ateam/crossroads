var Blog = require('../models/blogModel');

//var blogServiceController = {};
/**
 * BlogService Class
 */
class BlogService {
    //List all blogs
    static list() {
        return Blog.find({})
        .then((blogs) => {
            return blogs;
        });
    }

    //Find a blog
    static read(id) {
        return Blog.findById(id)
        .then((blog) => {
            return blog;
        });
    }

    //Create a new blog
    static create(obj) {
        var blog = new Blog(obj);
        return blog.save();
    }


    //Update an existing blog
    static update(id, data) {
        return Blog.findById(id)
        .then((blog)=> {
            blog.set(data);
            blog.save();
            return blog;
        });
    }

    //Delete a blog
    static delete(id){
        return Blog.remove({_id: id})
        .then((obj)=>{
            return obj;
        });
    }
} //End of BlogService Class

module.exports = BlogService;
