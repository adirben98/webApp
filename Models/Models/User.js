const mongoose = require('mongoose');
const Order = require('./Order');
const Schema = mongoose.Schema;




const user = new Schema({
    firstName: {
        type: String,
        // required:true
    },
    lastName: {
        type: String,
        // required:true
    },
    email:{
        type: String,
        // required:true,
        unique:true
    },
    password:{
        type: String,
        // required:true 
    },
    orderList:{
        type: [Schema.Types.ObjectId],
        ref: 'Order',
    },
    userType:{
        type:String,
        enum:['admin','client'],
        default:'client'
        
    }

});



module.exports = mongoose.model('user',user)