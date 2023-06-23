const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const Session=require('express-session')


mongoose.connect('mongodb+srv://adirben:shayhorovitz@shop.tv7a2dc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(Session({ secret: 'mySecretKey', resave: true, saveUninitialized: true }));

app.set('view engine','ejs')
app.use('/',require('./Routes/articles'))

app.listen(8080)

