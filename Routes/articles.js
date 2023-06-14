const express=require('express')
const router=express.Router()


router.get("/contact",(req,res)=>{
    res.render("views/contact")
})
router.get('/' , (req,res) => {
    res.render("index", {

    })
})

// app.get('/contact/' , (req,res) => {
//     res.render("contact", {

//     })
// })