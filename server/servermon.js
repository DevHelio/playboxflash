var pid = process.argv.slice(2)[0];

const fs = require("fs");
const { exec } = require("child_process");

const watchFile = "./server.js";

console.log(`\n ...Watching ${watchFile} \n`);
console.log(process.pid);

fs.watch(watchFile, (eventType, fn) => {
  if (eventType === "change") {
    // node ./server.js
    exec(`kill ${pid}`, (error, stdout, stderr) => {
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

    exec(`node ${watchFile} mon`, (error, stdout, stderr) => {
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
});
