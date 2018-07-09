var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fname:{type: String, required: true},
    lname:{type: String, required: true},
    user_id:{type: String, required: true},
    password:{type: String, required: true},
    create_dt:{type: Date, required: false},
    update_dt:{type: Date, required: false}
});

module.exports = mongoose.model("User", schema);