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
  const { name } = request.body;
  let rank = Math.floor(Math.random() * 100) + 15;
  pool.query(
    "INSERT INTO angels2019 (Rk, Name) VALUES ($1, $2)",
    [rank, name],
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
  const Name = request.params.Name;
  const { HR, RBI } = request.body;

  pool.query(
    "UPDATE angels2019 SET HR = $1, RBI = $2 WHERE Name = $3",
    [HR, RBI, Name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`HRs and RBIs of ${Name} were modified.`);
    }
  );
};

// DELETE a player
const deletePlayer = (request, response) => {
  const Name = request.params.Name;

  pool.query(
    "DELETE FROM angels2019 WHERE Name = $1",
    [Name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Player deleted with Name: ${Name}`);
    }
  );
};

// Export all of these functions
module.exports = {
  getPlayers,
  getPlayersByAge,
  createPlayer,
  updatePlayer,
  deletePlayer
};
