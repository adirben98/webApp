const express=require('express')
const router=express.Router()
const path=require('path')
const login=require('../Scripts/login')
const Product=require('../Controllers/ProductsController')
const User=require('../Controllers/UsersController')
const Branch=require('../Controllers/BranchsController')
const Cart=require('../Controllers/CartsController')
const Order=require('../Controllers/OrdersController')

router.get('/' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/index.html"))
})
router.get('/header.js' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Scripts/header.js"))
})

router.get('/header.html' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/header.html"))
})


router.get('/footer.js' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Scripts/footer.js"))
})

router.get('/footer.html' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/footer.html"))
})

router.get('/about' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/aboutUs.html"))
})

router.route('/products').get(  function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/allProducts.html"))
}).put(Product.getProducts)

router.get('/products/:productName'  ,function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/AProduct.html"))
})

router.put('/products/:productName' ,Product.getProduct)
router.post('/products/:productId' ,Product.getProductById)

router.route('/branches').get( function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/branches.html"))
}).put(Branch.getBranches)


router.get('/contact' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/contact.html"))
})
router.get('/CSS' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../CSS/home.css"))
})
router.get('/Eggs1' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/eggs1.jpeg"))
})
router.get('/Eggs2' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/eggs2.jpeg"))
})
router.get('/Eggs3' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/eggs3.jpeg"))
})
router.get('/Eggs4' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/eggs4.jpeg"))
})

router.get('/quail-egg' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/quail-egg.jpg"))
})

router.get('/cart' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Cart/cart.html"))
})

router.get('/cart/items',Cart.getCartItems )
router.route('/cart/items/:productItemId' ).post(Cart.addToCart).put(Cart.updateCartitem).delete(Cart.removeCartItem)


router.post('/cart/checkout',Cart.checkOut)


router.get('/account' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/account.html"))
})
router.get('/account/orders', Order.getOrders)
router.get('/account/user', User.getUser)
router.get('/check-login' , login.isloggedin)

router.get('/changePass' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/changePass.html"))
})

router.route('/login').get(function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/LoginForm.html"))
}).post(login.login)

router.get('/logout',login.logout)

router.route('/signup' ).get( function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/SignupForm.html"))
}).post(login.register)

router.get('/egg_nutrition' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/egg_nutrition.jpg"))
})

router.get('/alleggs' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/alleggs.jpg"))
})

router.get('/chicken' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/chicken.jpg"))
})

router.get('/freshly-laid-chicken-eggs' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/freshly-laid-chicken-eggs.jpg"))
})

router.route('/search').get(function(req,res)  {res.sendFile(path.join(__dirname,"../Scripts/searchBar.js"))}).post(Product.search)


router.route('/admin/createProduct').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createProduct.html"))})
.post(Product.createProduct)

router.route('/admin').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/adminPage.html"))})

router.route('/admin/deleteBranch').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteBranch.html"))})
.post(Branch.deleteBranch)

router.route('/admin/deleteProduct').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteProduct.html"))})
.post(Product.deleteProduct)

router.route('/admin/deleteUser').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteUser.html"))})
.post(User.deleteUser)

router.route('/admin/createBranch').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createBranch.html"))})
.post(Branch.createBranch)

router.route('/admin/createUser').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createUser.html"))})
.post(User.createUser)

module.exports=router
