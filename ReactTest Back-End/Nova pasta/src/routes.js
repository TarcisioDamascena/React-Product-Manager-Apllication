const express= require("express");
const routes = express.Router();

routes.get("/", (request, response) => response.send("Hello World"));

module.exports = routes;