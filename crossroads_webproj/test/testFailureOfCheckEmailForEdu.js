var assert = require('assert');
var checkEmailforEdu = require('../utilities/checkEmailforEdu');
describe('checkEmailforEdu', function() {
    it("confirms that email doesn't contain 'edu'" , function(){
        assert.equal(false, checkEmailforEdu('mo@harvard.com'));
    });
});