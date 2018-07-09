var assert = require('chai');
var blogModel = require('../models/blogModel');
describe('blogModel', function() {
    var blog = new blogModel();
    it("should be invalid if title is missing", function () {   
       blog.validate(function (err) {
           assert.expect(err.errors.title).to.exist;
       })
    })
    it("should be invalid if author is missing", function () {
        blog.validate(function (err) {
            assert.expect(err.errors.author).to.exist;
        })
     })
    it("should be invalid if description is missing", function () {
        blog.validate(function (err) {
            assert.expect(err.errors.description).to.exist;
        })
    })
    it("expects blog to be an instance of the blogModel", function () {
        assert.expect(blog).to.be.an.instanceof(blogModel);
    })
    it("should be valid even if image is not included", function () {
        blog.validate(function (err) {
            assert.should(err.errors.image_file_name).not.exist();
        });
    })
    it("should be valid even if update date is not included", function () {
        blog.validate(function (err) {
            assert.should(err.errors.update_dt).not.exist();
        });
    })
});