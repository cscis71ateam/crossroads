var assert = require('assert');
var monthFirstTodayDate = require('../utilities/monthFirstTodayDate');
describe('monthFirstTodayDate', function() {
    it("confirms that function returns today's date as '07/07/2018'" , function(){
        assert.equal('7/7/2018', monthFirstTodayDate());
    });
});