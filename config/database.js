const { Sequelize } = require("sequelize");

// Load config
require("dotenv").config();
const environment = require("./config.js");

const env = environment[process.env.NODE_ENV];

module.exports = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  logging: false,
  dialect: "mysql",
});
