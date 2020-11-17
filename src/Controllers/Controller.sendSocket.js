const fs = require("fs");
const net = require("net");
const client = new net.Socket();

getfile_json = () => {
  const data = require("../Utils/data.json");
  return data.data_array;
};
random_item = (item) => {

  return item[Math.floor(Math.random() * item.length)];

};

module.exports.sendSocket = async (req, res, next) => {
  let data = await getfile_json();

  data_result = () => {
    client.on('data', function (data) {
      console.log('Received: ' + data);
      client.end();
    });
  }

  sendSock_stop = () => {
    client.on('end', () => {
      console.log('disconnected from server');
    });
  }

  sendSocket_start = () => {
    client.connect(3030, "10.12.11.44", () => {
      console.log("Connected");
      setInterval(() => {
        client.write(random_item(data));
        console.log(data);
        data_result();
      }, 5000);
    });
  }


  sendSocket_start();



  res.send("sendSocket");
};
