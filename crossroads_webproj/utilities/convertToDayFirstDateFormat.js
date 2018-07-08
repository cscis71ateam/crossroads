module.exports = function convertToDayFirstDateFormat(date) {
    var myDate = new Date(date);

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();

    var dayFirstDateFormat = dd + '/' + mm + '/' + yyyy;

    return dayFirstDateFormat;
};