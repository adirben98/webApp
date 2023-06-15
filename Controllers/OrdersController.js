const OrderService = require('../Services/OrderService');

const createOrder = async (req,res) => {
    const newOrder = await OrderService.createOrder(req.body.id,req.body.user,req.body.products,req.body.quantity,req.body.totalPrice);
    res.json(newOrder);
}

const getOrderById = async (req,res) => {
    const order = await OrderService.getOrderById(req.params.id);
    if(!order) {
        return res.status(404).json({errors:['Order not found']});
    }
    res.json(order);
}

const getOrders = async (req,res) => {
    const orders = await OrderService.getOrders();
    res.json(order);
}

const deleteOrder = async (req,res) => {
    const order = await OrderService.deleteOrder(req.params.id);
    if (!order){
        return res.status(404).json({errors:['Order not found']});
      }
      res.send();
}

module.exports = {
    createOrder,
    getOrderById,
    getOrders,
    deleteOrder
}