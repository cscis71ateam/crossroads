module.exports = function countChars(str) {
    var totChars = 0;
    var strWithoutPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var strWithoutExtraSpace = strWithoutPunc.replace(/\s{2,}/g," ");
    totChars = strWithoutExtraSpace.length;
    return totChars;
};