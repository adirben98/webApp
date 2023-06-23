const articleService = require('../Services/CartService');
 let cart=[]
const addToCart= async (req,res) =>{
  cart.forEach(function(cartItem){
    if (cartItem.name === req.body.name) {
      
      cartItem.quantity++;
      productExists = true;
      return;
  }
  })
}
const checkOut= async (req,res) =>{}


module.exports = {
   addToCart,
   checkOut
}