const Order = require('../Models/Order')

const createOrder = async (userId,products,totalAmount,totalPrice,date) => {
    const newOrder = new Order(
        {
            userId:userId,
            products:products,
            totalQuantity:totalAmount,
            totalPrice:totalPrice
        });
    if (date)
    newOrder.createdAt = date;
    
    return await newOrder.save()
}

const getOrders = async(userId) =>{
    return await Order.find({userId})
}

const getAllOrders=async()=>{
    return await Order.find({});
}
module.exports = {
    createOrder,
    getOrders,
    getAllOrders
}
