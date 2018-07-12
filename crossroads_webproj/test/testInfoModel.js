var assert = require('chai');
var infoModel = require('../models/infoModel');
describe('infoModel', function() {
    var info = new infoModel();
    it("should be invalid if title is missing", function () {   
       info.validate(function (err) {
           assert.expect(err.errors.title).to.exist;
       })
    })
    it("should be invalid if description is missing", function () {
        info.validate(function (err) {
            assert.expect(err.errors.description).to.exist;
        })
     })
    it("should be invalid if source is missing", function () {
        info.validate(function (err) {
            assert.expect(err.errors.source).to.exist;
        })
    })
    it("should be valid even if source url is missing", function () {
        info.validate(function (err) {
            assert.expect(err.errors.sourceURL).not.exist;
        })
    })
    it("should be valid even if attribution is missing", function () {
        info.validate(function (err) {
            assert.expect(err.errors.attribution).not.exist;
        })
    })
 
    it("should be invalid if create date is not included", function () {
        info.validate(function (err) {
            assert.expect(err.errors.create_dt).to.exist;
        });
    })

    it("should be valid even if update date is not included", function () {
        info.validate(function (err) {
            assert.should(err.errors.update_dt).not.exist();
        })
    })
    it("expects info to be an instance of the infoModel", function () {
        assert.expect(info).to.be.an.instanceof(infoModel);
    })
});