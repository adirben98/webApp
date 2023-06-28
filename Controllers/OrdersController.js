const OrderService = require('../Services/OrderService');
const userService=require('../Services/UserService')

const createOrder = async (req,res) => {
    const newOrder = await OrderService.createOrder(req.body.id,req.body.user,req.body.products,req.body.quantity,req.body.totalPrice);
    res.json(newOrder);
}

const getOrders = async (req,res) => {
    const user=await userService.getUser(req.session.email)
    const orders = await OrderService.getOrders(user._id);
    res.json(orders);
}
const  getAllOrders=async(req,res)=>{
const allOrders=OrderService.getAllOrders();
res.json(allOrders)
}
module.exports = {
    createOrder,
    getOrders,
}
