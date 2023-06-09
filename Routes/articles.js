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
router.get('/index.js' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Scripts/index.js"))
})

router.get('/header.html' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/header.html"))
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

router.get('/cart' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Cart/cart.html"))
})

router.get('/cart/items',Cart.getCartItems )
router.route('/cart/items/:productItemId' ).post(Cart.isloggedin,Cart.addToCart).put(Cart.updateCartitem).delete(Cart.removeCartItem)


router.post('/cart/checkout',Cart.isloggedin,Cart.checkOut)


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

router.route('/search').get(Product.search)


router.get('/check-admin' , login.isloggedin)
router.get('/adminOnly',function(req,res){res.sendFile(path.join(__dirname,"../Scripts/adminOnly.js"))})

router.route('/admin').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/adminPage.html"))})

router.route('/admin/createBranch').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createBranch.html"))})
.post(Branch.createBranch)
router.route('/admin/deleteBranch').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteBranch.html"))})
.post(Branch.deleteBranch)
router.route('/admin/updateBranch').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/updateBranch.html"))})
.post(Branch.updateBranch)

router.route('/admin/createProduct').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createProduct.html"))})
.post(Product.createProduct)
router.route('/admin/deleteProduct').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteProduct.html"))})
.post(Product.deleteProduct)
router.route('/admin/updateProduct').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/updateProduct.html"))})
.post(Product.updateProduct)

router.route('/admin/deleteUser').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/deleteUser.html"))})
.post(User.deleteUser)
router.route('/admin/updateUser').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/updateUser.html"))})
.post(User.updateUser)
router.route('/admin/createAdmin').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/Admin/createAdmin.html"))})
.post(User.createAdmin)


router.get('/admin/allProducts' ,Product.getProducts)
router.get('/admin/allBranches' ,Branch.getBranches)
router.get('/admin/allUsers' ,User.getUsers)

router.post('/filters',Product.filter)

router.get('/facebook',function(req,res) {res.sendFile(path.join(__dirname,"../Scripts/facebook.js"))})

router.get('/cart.js',function(req,res) {res.sendFile(path.join(__dirname,"../Scripts/cart.js"))})


router.get('/allOrders',Order.getAllOrders)
router.post('/getProduct',Product.getProductById)


module.exports=router
