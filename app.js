const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const expressSession=require('express-session')


mongoose.connect('mongodb://127.0.0.1:27017/local?directConnection=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/',require('./Routes/articles'))
app.use(expressSession({ secret: 'mySecretKey', resave: true, saveUninitialized: true }));

app.set('view engine','ejs')

app.listen(8080)

