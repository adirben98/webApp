const express=require('express')
const router=express.Router()
const path=require('path')

router.get('/' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/Home/index.html"))
})

router.get('/home' , function(req,res)  {
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
    res.sendFile(path.join(__dirname,"../Views/User/Login.html"))
})

router.get('/signin' , function(req,res)  {
    res.sendFile(path.join(__dirname,"../Views/User/Signin.html"))
})
module.exports=router