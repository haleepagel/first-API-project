/* eslint-disable no-console */
const { expect, assert } = require("chai");
const config = require("../queries.js");
const knex = require("knex")(config.db);

// some tests here
describe("angels2019", () => {
  it("should do some stuff"),
    () => {
      // setup
      let expected = config.getPlayers;
      // exercise
      // assert
      expect(expected).to.be.true;
      // takedown ? ? ?
    };
});
