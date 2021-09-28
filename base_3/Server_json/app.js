const express = require("express");
const cors = require("cors");
const shoesController = require("./controller/shoes-controller");

const server = express();
server.use(cors()); 
server.use(express.json());
server.use("/api/shoes", shoesController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));