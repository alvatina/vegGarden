/**
 * Created by nguye on 2/28/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Tag', tagSchema);