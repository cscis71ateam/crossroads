var assert = require('assert');
var checkEmailForHarvard = require('../utilities/checkEmailForHarvard');
describe('checkEmailForHarvard', function() {
    it("confirms that email doesn't contain 'harvard'" , function(){
        assert.equal(false, checkEmailForHarvard('mo@gmail.com'));
    });
});