const express = require("express"); // npm i express
const expressSession = require("express-session"); // npm i express-session
const productsController = require("./controllers/products-controller");
const authController = require("./controllers/auth-controller");

const server = express();

server.use(expressSession({ name: "authenticationCookie", secret: "I-Love-Kittens", resave: true, saveUninitialized: false }));
server.use(express.json());
server.use("/api/products", productsController);
server.use("/api/auth", authController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));


// JWT = Json Web Token
