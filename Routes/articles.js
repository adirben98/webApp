const express=require('express')
const router=express.Router()
const path=require('path')
const login=require('../Controllers/login')
const Product=require('../Controllers/ProductsController')

router.get('/' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/index.html"))
})


router.get('/about' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/aboutUs.html"))
})

router.get('/products' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Product/allProducts.html"))
})

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


router.get('/cart' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Cart/cart.html"))
})

router.get('/account' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/account.html"))
})

router.get('/changepass' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/changePass.html"))
})

router.route('/login').get(function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/LoginForm.html"))
}).post(login.login)
router.post('/logout',login.logout)

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

router.route('/search').get(function(req,res)  {res.sendFile(path.join(__dirname,"../Controllers/searchBar.js"))}).post(Product.search)

router.route('/admin').get(function(req,res) {res.sendFile(path.join(__dirname,"../Views/User/Admin.html"))})
module.exports=router
