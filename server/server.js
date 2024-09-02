//Server side van de playboxflash
const WebSocket = require("ws");
const { exec } = require("child_process");

var args = process.argv.slice(2)[0];
if (args === "mon") {
  let pid = process.pid;
  console.log(pid);
  exec(`node ./servermon.js ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", function connection(ws) {
  console.log("Client connected2");

  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);

    ws.send(`${message}`);
  });

  // EDIT
  ws.on("close", function () {
    console.log("Client disconnected");
  });
});
