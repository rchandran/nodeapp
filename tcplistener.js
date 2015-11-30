// import net.
var net = require('net');

var count = 0;

// create server
var server = net.createServer(function(socket) {
  count++;
  console.log("Client " + count + " connected.");
  socket.write("Connected to server\r\n");
  socket.on('data', function(data) {
    console.log("Client command: " + data);
    if (String(data).trim() == "disconnect") {
      socket.end("Disconnecting client :" + count + "\n");
    }
  });

});

server.listen(10007, "127.0.0.1");

