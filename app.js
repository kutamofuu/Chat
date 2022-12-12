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

app.get('/rooms', function(req, res){
    res.sendFile(`${__dirname}/clients/privateRoom.html`)
})

app.get('/contactame', function(req, res){
    res.sendFile(`${__dirname}/clients/contact.html`)
})


server.listen(3000, () => {
    console.log(`Listening to port 3000`);
})

