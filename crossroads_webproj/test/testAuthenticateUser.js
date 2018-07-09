var assert = require('assert');
var authenticateUser = require('../utilities/authenticateUser');
describe('authenticateUser', function() {
    it("confirms that authentication works if both user id and password are correct" , function(){
        assert.equal(true, authenticateUser('mfaruqe','mo1234'));
    });
    it("confirms that authentication fails if user id is wrong" , function(){
        assert.equal(false, authenticateUser('ateam','mo123'));
    });
    it("confirms that authentication fails if password is wrong" , function(){
        assert.equal(false, authenticateUser('mfaruqe','mo123'));
    });
});