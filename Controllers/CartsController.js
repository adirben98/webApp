const cartService = require('../Services/CartService');
const ProductService=require('../Services/ProductService')
const orderService=require('../Services/OrderService')
const userService=require('../Services/UserService')

const addToCart= async (req,res) =>{

  var quantity=parseInt(req.body.quantity, 10)
  var productName=req.body.productName
  const usersEmail = req.session.email;
  
  const product = await ProductService.getProduct(productName);
    

    const cartItem=await cartService.findCartItem(product._id,usersEmail)
    if(cartItem){
      const totalquantity=quantity+cartItem.quantity
      const totalPrice=product.price*totalquantity
      const updateCartItem=await cartService.updateCartItem(product._id,totalquantity,totalPrice,usersEmail)
    }
    else{
      const newCartItem = await cartService.createCartItem(product._id,product.name,quantity,product.price*quantity,usersEmail)
    }
    res.redirect('/products')
    
}
const getCartItems= async (req,res)=>{
  const cartItems=await cartService.getCartItems(req.session.email)
  res.json(cartItems)}

const updateCartitem= async (req,res)=>{
  var quantity=req.body.quantity
  var productItemId=req.body.productItemId
  const usersEmail = req.session.email;

  const product = await ProductService.getProductById(productItemId);

  const totalPrice=quantity*product.price
  const updateCartItem=await cartService.updateCartItem(productItemId,quantity,totalPrice,usersEmail)
  res.json(updateCartItem)
}

const removeCartItem= async (req,res)=>{
  const productId=req.body.productId
  const usersEmail = req.session.email;

  const deleteCartItem=await cartService.deleteCartItem(productId,usersEmail)
  res.json(deleteCartItem)
}

const checkOut= async (req,res) =>{
//make an order and append it to the user's oredr history...
const user= await userService.getUser(req.session.email)
const cart=await cartService.getCartItems(req.session.email)
var array=[]
var totalPrice=0
var totalAmount=0
for (const cartItem of cart) {
  array.push(cartItem.productId);
  const product = await ProductService.getProductById(cartItem.productId);
  totalPrice += cartItem.quantity * product.price;
  totalAmount += cartItem.quantity;
}
var time= new Date().toDateString();
const newOrder=await orderService.createOrder(user._id,array,totalAmount,totalPrice,time)
  await cartService.deleteAllUsersCartItems(req.session.email)
  res.redirect('/')
}


module.exports = {
   addToCart,
   getCartItems,
   updateCartitem,
   removeCartItem,
   checkOut
}