const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 2002; // the year the Angels won the World Series!

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/angels2019", db.getPlayers);
app.get("/angels2019/:Age", db.getPlayersByAge);
app.post("/angels2019", db.createPlayer);
app.put("/angels2019/:Name", db.updatePlayer);
app.delete("/angels2019/:Name", db.deletePlayer);
// get the app up and running
app.listen(port, () => {
  console.log(`We're up and running on port ${port}.`);
});
