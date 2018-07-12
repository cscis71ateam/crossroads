var assert = require('assert');
var countChars = require('../utilities/countChars');
describe('countChars', function() {
    it("confirms that function returns characters count as 29 excluding extra space and punctuation.", function(){
        assert.equal(16, countChars('It is a nice day.'));
    });
});