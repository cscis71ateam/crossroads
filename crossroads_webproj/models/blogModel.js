var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: false},
    author:{type: String, required: false},
    create_dt:{type: Date, required: false}
});

module.exports = mongoose.model("Blog", schema);