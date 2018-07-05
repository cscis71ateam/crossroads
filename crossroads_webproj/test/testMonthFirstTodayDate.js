var assert = require('assert');
var monthFirstTodayDate = require('../utilities/monthFirstTodayDate');
describe('monthFirstTodayDate', function() {
    it("confirms that function returns today's date as '07/06/2018'" , function(){
        assert.equal('7/5/2018', monthFirstTodayDate());
    });
});