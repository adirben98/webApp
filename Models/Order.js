const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
const CartItem = require('./CartItem');



const order = new Schema({
  
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CartItem',
        }
      ]
      ,
    totalQuantity:{
        type:Number,
        required:true
        },
    totalPrice:{
        type:Number,
        required:true
            },
    createdAt:{
        type: Date,
        default:new Date()
    }
    
});



module.exports = mongoose.model('Order',order)