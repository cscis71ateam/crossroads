module.exports = function dayFirstTodayDate() {
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var dayFirstDateFormat = dd + '/' + mm + '/' + yyyy;

    return dayFirstDateFormat;
};