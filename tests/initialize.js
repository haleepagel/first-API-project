const config = require("../queries.js");
const knex = require("knex")(config.db);

const ignoreError = () => {
  // do nothing
};

const clearTable = tableName => {
  knex(tableName)
    .del()
    .catch(ignoreError);
};

const tables = ["angels2019"];

Promise.all(tables.map(clearTable)).then(process.exit);
