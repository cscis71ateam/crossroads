var assert = require('assert');
var checkForValidEmailAddress = require('../utilities/checkForValidEmailAddress');
describe('checkForValidEmailAddress', function() {
    it("confirms that email contains '@'", function(){
        assert.equal(true, checkForValidEmailAddress('mo@harvard.edu'));
    });
});