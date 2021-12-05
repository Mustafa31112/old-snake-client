const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541     // PORT number here,
   });

  // interpret incoming data as text
  // conn.on("connect", () => console.log("connected to game server"));
  conn.setEncoding("utf8");
  conn.on("connect", () => {
 conn.write("Name: MUS");
 
 
//  setInterval(() => {
   
//    conn.write("Move: up")
//  }, 50)




})

  return conn;
};
module.exports = connect;