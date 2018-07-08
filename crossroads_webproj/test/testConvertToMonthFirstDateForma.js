var assert = require('assert');
var convertToMonthFirstDateFormat = require('../utilities/convertToMonthFirstDateFormat');
describe('convertToMonthFirstDateFormat', function() {
    it("confirms that function returns the passed date as 'mm/dd/yyyy'" , function(){
        assert.equal('7/13/2018', convertToMonthFirstDateFormat('2018-7-13'));
    });
});