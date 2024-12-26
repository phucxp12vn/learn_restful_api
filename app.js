const express = require("express");

const app = express();
app.use(express.json());

app.get("/status", (request, response) => {
  const status = {
    status: "running",
  };

  response.send(status);
});

app.listen(3000, () => {
  console.log("Server Listening on PORT:", 3000);
});
