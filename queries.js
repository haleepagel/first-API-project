const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "angels",
  password: "postgres",
  port: 5432
});

// GET ALL players
const getPlayers = (request, response) => {
  console.log("Successfully returned all players!");
  pool.query(
    'SELECT * FROM angels2019 ORDER BY "Name" ASC;',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET players by AGE
const getPlayersByAge = (request, response) => {
  console.log("this is request.url: ", request.url);
  console.log("this is request.params: ", request.params);
  const age = request.params.Age;
  console.log("this is age: ", age);
  pool.query(
    'SELECT * FROM angels2019 WHERE "Age" = $1;',
    [age],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// POST a new player
const createPlayer = (request, response) => {
  const { pos } = request.params.Pos;
  let rank = Math.floor(Math.random() * 100) + 15;
  pool.query(
    "INSERT INTO angels2019 (Rk, Pos) VALUES ($1, $2)",
    [rank, pos],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Player added with Rk: ${rank}`);
    }
  );
};

// PUT modify an existing player's data
const updatePlayer = (request, response) => {
  const rk = request.params.Rk;
  const { HR, RBI } = request.body;

  pool.query(
    "UPDATE angels2019 SET HR = $1, RBI = $2 WHERE Rk = $3",
    [HR, RBI, rk],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(200)
        .send(`HRs and RBIs of player with Rk #${rk} were modified.`);
    }
  );
};

// DELETE a player
const deletePlayer = (request, response) => {
  const rk = request.params.Rk;

  pool.query("DELETE FROM angels2019 WHERE Rk = $1", [rk], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Player deleted with Rk #${rk}`);
  });
};

// Export all of these functions
module.exports = {
  getPlayers,
  getPlayersByAge,
  createPlayer,
  updatePlayer,
  deletePlayer
};
