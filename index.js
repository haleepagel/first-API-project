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
  response.json({
    getPlayers: "/angels2019",
    getPlayersByAge: "/angels2019/:Age",
    createPlayer: "/angels2019/PosCreate/:Pos",
    updatePlayer: "/angels2019/RkUpdate/:Rk",
    deletePlayer: "/angels2019/RkDelete/:Rk"
  });
});
app.get("/angels2019", db.getPlayers);
app.get("/angels2019/:Age", db.getPlayersByAge);
app.post("/angels2019/PosCreate/:Pos", db.createPlayer);
app.put("/angels2019/RkUpdate/:Rk", db.updatePlayer);
app.delete("/angels2019/RkDelete/:Rk", db.deletePlayer);
// get the app up and running
app.listen(port, () => {
  console.log(`We're up and running on port ${port}.`);
});
