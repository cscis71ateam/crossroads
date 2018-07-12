const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
var checkEmailforEdu = require('../utilities/checkEmailForEdu');

defineSupportCode(function({ Given, Then, When }) {
  let is_granted = '';
  let email = '';

  Given('a blogger email is {string}', function (input) {
    email = input;
  });
  When('his permission is checked', function () {
    permission = checkEmailforEdu(email);
    if(permission == true){
      is_granted='granted';
    } else {
      is_granted='not-granted'
    }
  });
  Then('his permission is {string}', function (input) {
    assert.equal(is_granted, input);
  });
});