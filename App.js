const express = require("express");
const app = express();
const ConfigPort = require("./src/Utils/Config.Port");

close = () => {
  return new Promise((resolve, reject) => {
    httpServer.close((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
initialize = () => {
  return new Promise((resolve, reject) => {
    app.use(express.json());
    app.get("/API", (req, res, next) => {
      res.end("Welcome");
    });
    app.use("/API/sendSocket", require("./src/Routers/Router.sendSocket"));
    app.listen(ConfigPort.port, () => {
      console.log("Listening on port : ", ConfigPort.port);
    });
  });
};

startup = async () => {
  try {
    console.log("INFO : Starting service...");
    //do someting
    await initialize();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

startup();
