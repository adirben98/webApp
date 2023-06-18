const mongoose = require('mongoose');
const Supplier = require('./Supplier');
const Schema = mongoose.Schema;

const product = new Schema({
    Id:  {
       type: String, 
       required:true,
       unique:true 
    },
    name: { 
        type: String,
        required:true
    },
    category:{
        type: String,
        enum:['chicken eggs','duck eggs','ostrich eggs','quail eggs','special eggs'],
        required:true
    },
    size: {
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
    supplier:{
        type:String,
        required:true 
    }
});



module.exports = mongoose.model('Product',product)