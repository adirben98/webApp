const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/store',
{useNewUrlParser:true,
useUnifyTopology:true})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/',require('./Routes/articles'))
app.set("view engine","ejs")


app.listen(8080)

