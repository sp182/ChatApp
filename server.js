const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { setTimeout } = require('timers/promises');
const io = new Server(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

/*
setTimeout (() => {
  let obj ={
    name: 'chatap'
  }
  socket.emit('customEvent',{data: obj})
},4000);

socket.on('clientEvent',(data) => {
  console.log("clienet data received",data)
})
*/
socket.on('send_message',(data)=>{
  socket.emit('received_message',data)
})
  socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });

server.listen(3000, () => {
  console.log(`server running at ${port}`);
});