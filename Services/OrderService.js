const Order = require('../Models/Order')

const createOrder = async (id,user,products,quantity,totalPrice,date) => {
    const order = new Order(
        {
        id:id,
        user:user,
        products:products,
        quantity:quantity,
        totalPrice:totalPrice,
        
        });
    if (date)
        order.createdAt = date;
    
    return await order.save()
}

const getOrderById = async(id) =>{
    return await Order.findById(id)
}

const getOrders = async() =>{
    return await Order.find({})
}



const deleteOrder = async (id) => {
    const order = await getOrderById(id);
    if (!order)
        return null;
    await order.deleteOne();
    return order;
}

module.exports = {
    createOrder,
    getOrderById,
    getOrders,
    deleteOrder
}