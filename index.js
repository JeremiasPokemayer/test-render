"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
app.get("/env", function (req, res) {
    res.json({
        enviroment: process.env.NODE_ENV,
    });
});
app.get("/db-env", function (req, res) {
    res.json({
        enviroment: process.env.DB_HOST,
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola soy Jere",
    });
});
app.use(express.static("dist"));
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(PORT, function () {
    console.log("El servidor se inicio en el puerto: ", PORT);
});
