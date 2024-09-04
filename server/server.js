//Server side van de playboxflash.

const { exec } = require("child_process");

const WebSocket = require("ws");

/* 
Commands:
#node server dev
node server dev mon
#node server prod
*/


const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);

    ws.send(`${message}`);
  });

  // EDITS
  ws.on("close", function () {
    console.log("Client disconnected");
  });
});
