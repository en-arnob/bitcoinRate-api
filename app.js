const express = require("express");
const router = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Softcent!");
});

app.use(router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started successfully on Port: ${PORT}`);
});
