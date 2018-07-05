window.onload = function() {
    //Set the start and end date default value as today.
    var startdate = document.getElementById("startdate");
    var enddate = document.getElementById("enddate");

    var today = new Date();
    startdate.value = formatDate(today);
    
    var newdate = new Date(today);
    newdate.setDate(newdate.getDate() + 7);
    enddate.value = formatDate(newdate);
};

/** 
 * Format the passed date.
 */
function formatDate(unformattedDate) {
    var day = unformattedDate.getDate();
    var month = unformattedDate.getMonth() + 1; 
    var year = unformattedDate.getFullYear();

    //If day value is less than 10, pad with 0
    if(day < 10) {
        day = '0' + day;
    } 

    //If month value is less than 10, pad with 0
    if(month < 10) {
        month = '0' + month;
    } 

    //Generate today's date as yyyy-mm-dd
    formattedDate = year + '-' + month + '-' + day;
    
    return formattedDate;
}