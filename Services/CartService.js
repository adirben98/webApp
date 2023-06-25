const CartItem=require("../Models/CartItem")

const createCartItem= async (productId,productName,quantity,totalPrice,usersEmail)=>{

     const newCartItem=new CartItem({productId:productId,productName:productName,quantity:quantity,totalPrice:totalPrice,usersEmail:usersEmail})
    return await newCartItem.save()
}
const getCartItems=async(usersEmail)=>{
    const cartItems=await CartItem.find({usersEmail})
    return cartItems
 }

const findCartItem=async(productId,usersEmail)=>{return await CartItem.findOne({productId,usersEmail})}

const updateCartItem=async(productId,quantity,totalPrice,usersEmail)=>{
    const updateCartItem= await CartItem.findOne({productId,usersEmail})
    updateCartItem.quantity=quantity
    updateCartItem.totalPrice=totalPrice
    return await updateCartItem.save()
}

const deleteCartItem=async(productId,usersEmail)=>{
    const deleteCartItem=await CartItem.findOne({productId,usersEmail})
    await deleteCartItem.deleteOne()
    return deleteCartItem
}

const deleteAllUsersCartItems=async(usersEmail)=>{
await CartItem.deleteMany({usersEmail})
}

module.exports = {
   createCartItem,
   getCartItems,
   findCartItem,
   updateCartItem,
   deleteCartItem,
   deleteAllUsersCartItems
}