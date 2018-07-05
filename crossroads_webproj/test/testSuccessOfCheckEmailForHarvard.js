var assert = require('assert');
var checkEmailForHarvard = require('../utilities/checkEmailForHarvard');
describe('checkEmailForHarvard', function() {
    it("confirms that email contains 'harvard'" , function(){
        assert.equal(true, checkEmailForHarvard('mo@harvard.com'));
    });
});