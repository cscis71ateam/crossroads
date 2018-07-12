module.exports = function countWords(txt) {
    var totWords = 0;
    totWords = txt.trim().split(/\s+/).length;
    return totWords;
};