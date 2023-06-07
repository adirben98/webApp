const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
const Product = require('./Product');



const cartItem = new Schema({
    product: {
        type: Product,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    }

    
});



module.exports = mongoose.model('cartItem',cartItem)