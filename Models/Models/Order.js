const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
const CartItem = require('./CartItem');



const order = new Schema({
    Id: {
        type: String,
        required:true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      products: {
        type: [Schema.Types.ObjectId],
        ref: 'CartItem',
        required: true
      },
    quantity:{
        type:Number,
        required:true
        },
    totalPrice:{
        type:Number,
        required:true
            },
    createdAt:{
        type: Date,
        default:Date.now
    }
    
});



module.exports = mongoose.model('Order',order)