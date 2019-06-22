const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new net.Socket();

const host = "localhost";
const port = 1918;

client.connect(port, host, () => {
  console.log("Connected, bitch");
});

client.on("data", data => {
  rl.question("Command: ", command => {
    client.write(command);
  });
});

client.on("end", () => {
  console.log("Disconnected, bitch");
});
