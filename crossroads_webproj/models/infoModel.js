var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    source:{type: String, required: true},
    sourceURL:{type: String, required: false},
    attribution:{type: String, required: false},
    create_dt:{type: Date, required: true},
    update_dt:{type: Date, required: false}
});

module.exports = mongoose.model("Info", schema);