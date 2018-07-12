var assert = require('assert');
var countWords = require('../utilities/countWords');
describe('countWords', function() {
    it("confirms that function returns word count as 5", function(){
        assert.equal(5, countWords('It is a nice day.'));
    });
});