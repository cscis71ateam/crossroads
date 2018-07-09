module.exports = function convertToMonthFirstDateFormat(date) {
    var myDate = new Date(date);

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();

    var monthFirstDateFormat = mm + '/' + dd + '/' + yyyy;

    return monthFirstDateFormat;
};