const express = require("express");
const router = new express.Router();
const c_sendSocket = require("../Controllers/Controller.sendSocket");

router.get("/Test", c_sendSocket.sendSocket);

module.exports = router;
