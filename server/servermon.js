const fs = require('fs');
const child = require('child_process');

const { exec } = require('node:child_process');

const w = fs.watch('server.js');
let CurrentChild = child.fork('server.js');

w.on('change', () => {
	console.log("Hot-reloading console rn!");
	
	if (CurrentChild){
		CurrentChild.kill();
	}
	CurrentChild = child.fork('server.js');
});