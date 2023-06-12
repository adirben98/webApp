const mongoose = require('mongoose');
const Supplier = require('./Supplier');
const Schema = mongoose.Schema;




const product = new Schema({
    productid:  {
       type: String, 
       required:true,
       unique:true 
    },
    name: { 
        type: String,
        required:true
    },
    category:{
        enum:['chicken eggs','duck eggs','ostrich eggs','quail eggs','special eggs'],
        required:true
    },
    size: {
        enum:['small','medium','large'],
        required:true
    },
    traysize: {
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
        type:Supplier,
        required:true 
    }
});



module.exports = mongoose.model('product',product)