$(document).ready(function(){

    //Initialize the display and retrieve & show the current records
    displayStatusMessage("Current records:");
    retrieveAndDsiplayCurrentRecords();

    //Read all records when Raed All button is clicked
    $("#read-all").on("click", function() {
        //Clean-up previous data and message on the page
        initializePageDisplay();
        retrieveAndDsiplayCurrentRecords();
    });

    //Read a particular record for the supplied ID when Read by Id button is clicked
    $("#read-by-id").on("click", function() {
        //Clean-up previous data and message on the page
        initializePageDisplay();
        var id = $("#id").val().trim();
        if (!id){
            displayStatusMessage("No ID supplied! Please, try again by providing a blog ID.");
            return;
        }

        result = callRestApi ("GET", "/api/blogs/", null, null, id);
        if (result) {
            displayStatusMessage("Retrieved blog:");
        }
    });

    //Create a new record when a new blog is submitted via Create New button
    $("#create-new").on("click", function() {
        initializePageDisplay();
        if (!$("#description").val()){
            displayStatusMessage("No description! Please, try again by providing at least the blog description.");
            return;
        }

        var startDate = "";
        var endDate = "";
        if(!$("#startDate").val()){
            var today = new Date();
            startDate = formatDate(today);
        } else {
            startDate = $("#startDate").val();
        }

        if(!$("#endDate").val()){
            var newdate = new Date();
            newdate.setDate(newdate.getDate() + 7);
            endDate = formatDate(newdate);
        } else {
            endDate = $("#endDate").val();
        }

        var data = {
            description: $("#description").val(),
            startDate: startDate,
            endDate: endDate,
            assignee: $("#assignee").val()
        };
        var body = JSON.stringify(data);
        var contentType = "application/json";
        result = callRestApi ("POST", "/api/blogs/", body, contentType, null);
        if (result) {
            displayStatusMessage("The new record has been successfully created. Please, click the READ ALL button to see the new blog you created.");
        } else {
            displayStatusMessage("Oops! Something went wrong couldnot create the new blog. Please, make sure that you provided the blog description.");
        }
    });

    //Update an existing record for the supplied ID when Update button is clicked
    $("#update").on("click", function() {
        initializePageDisplay();
        var id = $("#id").val().trim();
        if (!id){
            displayStatusMessage("No ID supplied! Please, try again by providing a blog ID.");
            return;
        }
        
        if (!$("#description").val()){
            displayStatusMessage("No description! Please, try again by providing at least the blog description.");
            return;
        }
        
        var data = {
            description: $("#description").val(),
            startDate: $("#startDate").val(),
            endDate: $("#endDate").val(),
            assignee: $("#assignee").val()
        };
        var body = JSON.stringify(data);
        var contentType = "application/json";
        result = callRestApi ("PUT", "/api/blogs/", body, contentType, id);
        if (result) {
            displayStatusMessage("The record has been successfully updated. Please click the READ ALL button to see your update.");
        } else {
            displayStatusMessage("Oops! Something went wrong. Could not update the record. Check the ID and try again.");
        }
    });

    //Delete an existing record with supplied ID when Delete button is clicked
    $("#delete").on("click", function() {
        initializePageDisplay();
        var id = $("#id").val().trim();
        if (!id){
            displayStatusMessage("No ID supplied! Please, try again by providing a blog ID.");
            return;
        }
        result = callRestApi ("DELETE", "/api/blogs/", null, null, id);
        if (result) {
            displayStatusMessage("The record has been successfully deleted. PLease, click the READ ALL button to check the deletion.");
        } else {
            displayStatusMessage("Oops! Something went wrong. Could not delete the record. Check the ID and try again.");
        }
    });

    $("#clearForm").on("click", function() {
        clearForm();
    });
});

function displayStatusMessage(msg) {
    $("id").val("");
    $("#msg").html(msg);
}

function initializePageDisplay() {
    $("#read-all-content").html('');
    displayStatusMessage('');
}

function retrieveAndDsiplayCurrentRecords() {
    result = callRestApi ("GET", "/api/blogs/", null, null, null);
    if (result) {
        displayStatusMessage("Current blogs:");
    }
}

function clearForm() {
    $("#id").val("");
    $("#description").val("");
    $("#startDate").val("");
    $("#endDate").val("");
    $("#assignee").val("");
}

function callRestApi (method, uri, body, contentType, id) {
    if(id) {
        uri += id;
    }
    $.ajax({
        type: method,
        url: uri,
        data: body,
        contentType: contentType
    })
    .done(function(data, status, jqXHR) {
        switch(method) {
            case "GET" : if(!id) {
                //Read All
                    $.each(data, function(index, item) {
                        console.log(index, item);
                        $("#read-all-content")
                        .append( "<p>" 
                            + "ID: " + item._id +" | "
                            + "Description: " + item.description +" | "
                            + "Start Date: " + (item.startDate).substring(0, 10) + " | "
                            + "End Date: " + (item.endDate).substring(0, 10) +" | "
                            + "Assignee: " + item.assignee +" | "
                            + "</p>");
                    });
                } else {
                    //Read by Id
                    $("#read-all-content")
                        .html( "<p>" 
                        + "ID: " + data._id +" | "
                        + "Description: " + data.description +" | "
                        + "Start Date: " + (data.startDate).substring(0, 10) +" | "
                        + "End Date: " + (data.endDate).substring(0, 10) +" | "
                        + "Assignee: " + data.assignee +" | "
                        + "</p>");

                    $("#id").val(data._id);
                    $("#description").val(data.description);
                    $("#startDate").val((data.startDate).substring(0, 10));
                    $("#endDate").val((data.endDate).substring(0, 10));
                    $("#assignee").val(data.assignee);
                } //GET ends
                break;
            case "POST": 
            case "PUT":
            case "DELETE":
            default:
                clearForm();
        }
    })
    .fail(function(data, status, error) {
        console.log(error);
        return 0;
    });

    return 1;
}

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