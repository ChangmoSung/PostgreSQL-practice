const express = require("./src/app");
const pool = require("./src/pool");

pool.connect({
  host: "localhost",
  port: 5432,
  database: "socialnetwork",
  user: "changmosung",
  password: "",
});

app();
