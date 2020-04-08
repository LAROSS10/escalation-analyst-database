require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.dbpassword,
    database: "escalation_analystDB",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.dbpassword,
    database: "testdb",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.JAWSDB_USER || "root",
    password: process.env.JAWSDB_PASS || process.env.dbpassword,
    database: process.env.JAWSDB_DATABASE || "database_production",
    host: process.env.JAWSDB_HOST || "127.0.0.1",
    dialect: "mysql"
  }
};
