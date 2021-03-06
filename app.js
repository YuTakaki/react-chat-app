const express = require('express');
const app = express();
const socket = require('socket.io');

const port = process.env.port || 4000;

const server = app.listen(port, () => console.log('connected'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log('socket connection', socket.id);
    socket.on('send', data => {
        io.sockets.emit('send', {data, id: socket.id});
    });
    socket.on('type', () => {
        socket.broadcast.emit('type');
    })

})