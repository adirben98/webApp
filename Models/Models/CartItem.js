const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product');



const cartItem = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    }

    
});



module.exports = mongoose.model('CartItem',cartItem)