const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product');



const cartItem = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    totalPrice:{
        type:Number,
        required:true
    },
    usersEmail:{
        type:String,
        required:true
    }

    
});



module.exports = mongoose.model('CartItem',cartItem)