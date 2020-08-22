const express = require('express');
const app = express();
const socket = require('socket.io');

const port = process.env.port || 4000;

const server = app.listen(port, () => console.log('connected'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log('socket connection');

})