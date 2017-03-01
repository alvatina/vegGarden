/**
 * Created by nguye on 3/1/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    uname:{
        type: String,
        required: true,
        unique: true
    },
    passwd:{
        type: String,
        required: true
    },
    avatar: String,
    name: String,
});

module.exports = mongoose.model('Account', accountSchema);