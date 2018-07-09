var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    author:{type: String, required: true},
    image_file_name:{type: String, required: false},
    create_dt:{type: Date, required: false},
    published:{type: Number, required: false},
    publish_dt:{type: Date, required: false},
    update_dt:{type: Date, required: false}
});

module.exports = mongoose.model("Blog", schema);