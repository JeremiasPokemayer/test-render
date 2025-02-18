import * as express from "express";
const app = express();
const PORT = 3000;

app.get("/env", (req, res) => {
  res.json({
    enviroment: process.env.NODE_ENV,
  });
});

app.get("/db-env", (req, res) => {
  res.json({
    enviroment: process.env.DB_HOST,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola soy Jere",
  });
});

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, () => {
  console.log("El servidor se inicio en el puerto: ", PORT);
});
