/**
 * Created by nguye on 2/28/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var idolSchema = new Schema({
    personal_id: String,
    alias: {
        type: String,
        required: true
    },
    birthday: String,
    avatar: String,
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    area:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Area'
    }],
    measurements:{
        height: Number,
        weight: Number,
        breast: Number,
        waist: Number,
        hips: Number
    },
    price: {
        type: Number,
        default: -1
    },
    services:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    note: String,
    private_info:{
        real_name: String,
        phone_number: String,
        social: String
    }
})