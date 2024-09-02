// Playboxflash

// Web gebaseerde game console.
// Het project van vandaag is websockets leren gebruiken om een host-controller relatie te creeeren in een server!!!

// Inspiration:
// https://www.youtube.com/@TsodingDaily/videos
// https://www.youtube.com/watch?v=MeaTJSb6KWI&t=3762s

// Sources:
// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

const socket = new WebSocket("ws://localhost:8080");

socket.onopen = (event) => {
  // Verwerk open verbinding
  console.log(event);
  console.log("Server start connected");
};

/* socket.onmessage = function(event) { 
  // Verwerk ontvangen bericht 
}; 

socket.onclose = function(event) { 
  // Verwerk gesloten verbinding 
};  */

const sendMessage = (bericht) => {
  socket.send(bericht);
};

sendMessage("Hello World");
