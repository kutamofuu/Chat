const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', function(socket){
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', function(req, res){
    res.sendFile(`${__dirname}/clients/index.html`)
})

server.listen(3000, function(){
    console.log(`Listening to port 3000`);
})