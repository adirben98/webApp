const CartItem=require("../Models/CartItem")

const createCartItem= async (name)=>{
    return new CartItem({name:name,quantity:1})
}




module.exports = {
   createCartItem
}