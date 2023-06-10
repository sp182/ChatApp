const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

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
    name:"chatApp"
  }
  socket.emit('customEvent',{data: obj}) //server to client 1
},4000);

//client to server side 2
socket.on('clientEvent',(data)=>{
  console.log("client data received",data)
})
*/

/*socket.on('clientEvent',(data) => {
  console.log("client data received",data)
})*/

socket.on('send_message',(data)=>{
io.emit('received_message',data)
})

  socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });

server.listen(port, () => {
  console.log(`server running at http://localhost:$${port}/`);
});