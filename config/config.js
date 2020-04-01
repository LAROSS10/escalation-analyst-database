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
    username: "root",
    password: process.env.dbpassword,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
