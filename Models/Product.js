const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  
    name: { 
        type: String,
        required:true
    },
    category:{
        type: String,
        enum:['chicken','duck','ostrich','quail','special'],
        required:true
    },
    EggSize: {
        type: String,
        enum:['small','medium','large'],
        required:true
    },
    traysize: {
        type: String,
        enum:['4','12','18','30'],
        required:true
    },
    price:{
        type: Number,
        required:true 
    },
    description:{
        type: String,
        required:true 
    },
    image:{
        type:String,
        required:true
    }

});



module.exports = mongoose.model('Product',Product)