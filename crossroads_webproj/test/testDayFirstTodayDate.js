var assert = require('assert');
var dayFirstTodayDate = require('../utilities/dayFirstTodayDate');
describe('dayFirstTodayDate', function() {
    it("confirms that function returns today's date as '5/7/2018'" , function(){
        assert.equal('7/7/2018', dayFirstTodayDate());
    });
});