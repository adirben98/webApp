const io=require('socket.io')(3000,{
    cors:{
        origin:["http://localhost:8080"],
    },
})

io.on('connection',(socket)=>{

socket.on('bought-ostrich',()=>{
    // todo: write to db
    socket.broadcast.emit("someone-bought-an-ostrich")
})





})

module.export=io