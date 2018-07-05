module.exports = function monthFirstTodayDate() {
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var monthFirstDateFormat = mm + '/' + dd + '/' + yyyy;

    return monthFirstDateFormat;
};