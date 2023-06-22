const express=require('express')
const router=express.Router()
const path=require('path')
const login=require('../Scripts/login')
const Product=require('../Controllers/ProductsController')
const User=require('../Controllers/UsersController')

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

router.get('/products/:productName' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/AProduct.html"))
})

router.put('/products/:productName' ,Product.getProduct)


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
router.get('/account' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/account.html"))
})
router.get('/account/:email', User.getUser)

router.get('/changepass' , function(req,res)  {
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








module.exports=router
