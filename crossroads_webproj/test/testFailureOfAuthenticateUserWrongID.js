var assert = require('assert');
var authenticateUser = require('../utilities/authenticateUser');
describe('authenticateUser', function() {
    it("confirms that user id matches" , function(){
        assert.equal(false, authenticateUser('faruqem','mo1234'));
    });
});