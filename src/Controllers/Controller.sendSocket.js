const fs = require("fs");
const net = require("net");
const client = new net.Socket();

getfile_json = () => {
  const data = require("../Utils/data.json");
  return data.data_array;
};

module.exports.sendSocket = async (req, res, next) => {
  const data = await getfile_json();

  client.connect(3030, "10.12.11.44", () => {
    console.log("Connected");
    client.write("Hello");
  });

  console.log(data[0]);

  const data2 = data[0];

  client.on(data2, function (data2) {
    console.log("Received " + data2.length + " bytes\n" + data2);
  });

  client.on("close", function () {
    console.log("Connection closed");
  });

  res.send("sendSocket");
};
