var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    description:{type: String, required: true},
    startDate:{type: Date, required: false},
    endDate:{type: Date, required: false},
    assignee:{type: String, required: false}
});


module.exports = mongoose.model("Task", schema);