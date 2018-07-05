var assert = require('assert');
var checkForValidEmailAddress = require('../utilities/checkForValidEmailAddress');
describe('checkForValidEmailAddress', function() {
    it("confirms that email doesn't contain '@'", function(){
        assert.equal(false, checkForValidEmailAddress('mo.harvard.edu'));
    });
});