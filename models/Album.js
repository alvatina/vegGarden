/**
 * Created by nguye on 2/28/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
    idol:{
        type: Schema.Types.ObjectId,
        ref: 'Idol'
    },
    items:[String]
});
module.exports = mongoose.model('Album', albumSchema);