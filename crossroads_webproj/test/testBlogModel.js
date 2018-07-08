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
});