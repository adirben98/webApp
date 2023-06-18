const express=require('express')
const router=express.Router()
const path=require('path')
const login=require('../Controllers/login')

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

router.get('/login' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/LoginForm.html"))
})

router.route('/signup' ).get( function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/SignupForm.html"))
}).post(login.register)
module.exports=router