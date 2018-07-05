var assert = require('assert');
var authenticateUser = require('../utilities/authenticateUser');
describe('authenticateUser', function() {
    it("confirms that us›er id matches" , function(){
        assert.equal(false, authenticateUser('ateam','mo123'));
    });
});