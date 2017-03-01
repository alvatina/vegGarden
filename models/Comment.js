/**
 * Created by nguye on 2/28/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    from: String,
    for: {
        type: Schema.Types.ObjectId,
        ref:'Idol'
    },
    message: {
        type: String,
        required: true
    },
    replies:[{
        from: String,
        message: {
            type: String,
            required: true
        }
    }]
});
module.exports = mongoose.model('Comment',commentSchema);