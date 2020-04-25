// create express app
const express = require("express");

const app = express();

// you can customize the port #. Here I choose the year 2002 since that is when the Angels were World Series Champs!
const port = process.env.PORT || 2002;

app.listen(port, () => {
  console.log(`Listening at http://localhost:2002`);
});
