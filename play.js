const net = require("net");
const connect = require("./client")
// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost", // IP address here,
//     port: 50541     // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  return stdin;
};
const result = setupInput()
const handleUserInput = function (data) {
  if (data === '\u0003') {
    
    process.exit();
  } 
  
};
result.on("data", handleUserInput)



console.log("Connecting ...");
connect();