const mongoose = require('mongoose');
const Supplier = require('./Supplier');
const Schema = mongoose.Schema;




const product = new Schema({
    name: {
        type: String,
        required:true
    },
    category:{
        enum:['red','white','rose'],
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