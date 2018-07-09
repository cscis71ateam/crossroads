var assert = require('assert');
var convertToDayFirstDateFormat = require('../utilities/convertToDayFirstDateFormat');
describe('convertToDayFirstDateFormat', function() {
    it("confirms that function returns the passed date as 'dd/mm/yyyy'" , function(){
        assert.equal('13/7/2018', convertToDayFirstDateFormat('2018-7-13'));
    });
});