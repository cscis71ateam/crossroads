var assert = require('chai');
var userModel = require('../models/userModel');
describe('userModel', function() {
    var user = new userModel();
    it("should be invalid if first name is missing", function () {   
       user.validate(function (err) {
           assert.expect(err.errors.fname).to.exist;
       })
    })
    it("should be invalid if last name is missing", function () {
        user.validate(function (err) {
            assert.expect(err.errors.lname).to.exist;
        })
     })
    it("should be invalid if user ID is missing", function () {
        user.validate(function (err) {
            assert.expect(err.errors.user_id).to.exist;
        })
    })
    it("should be invalid if password is missing", function () {
        user.validate(function (err) {
            assert.expect(err.errors.password).to.exist;
        })
    })
    it("expects user to be an instance of the userModel", function () {
        assert.expect(user).to.be.an.instanceof(userModel);
    })
});