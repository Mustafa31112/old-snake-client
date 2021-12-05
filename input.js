// const connect = require("./client");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    } 
    // console.log(connection)
    if (data === 'w') connection.write('Move: up');
    if (data === 'a') connection.write('Move: left');
    if (data === 'd') connection.write('Move: right');
    if (data === 's') connection.write('Move: down');
  };
  stdin.on("data", handleUserInput);
  return stdin;
};


// console.log(connect())
// const result = setupInput()
// result.on("data", handleUserInput)

module.exports = { setupInput };