const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branch = new Schema({
    _id: {
        type:String,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Xcoordinate:{
type:Number,
required:true
    },
    Ycoordinate:{
        type:Number,
required:true
    }
});



module.exports = mongoose.model('branch',branch)