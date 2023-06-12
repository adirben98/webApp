const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
const Product = require('./Product');



const order = new Schema({
    Id: {
        type: String,
        required:true
    },
    user: {
        type: User,
        required:true
    },
    products:{
        type: [Product],
        required:true
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



module.exports = mongoose.model('order',order)