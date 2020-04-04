const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  let Case = sequelize.define("Case", {
    //issueNumber: DataTypes.INTEGER,
    requestor: DataTypes.INTEGER,
    clientName: { type: Sequelize.STRING, allowNull: false },
    financialImpact: DataTypes.DECIMAL,
    //submitDate: DataTypes.DATE,
    resolveDate: DataTypes.DATE,
    //sales: DataTypes.STRING,
    //accounting: DataTypes.STRING,
    //contracts: DataTypes.STRING,
    //pricing: DataTypes.STRING,
    department: { type: Sequelize.STRING, allowNull: false },
    escalationAnalyst: DataTypes.INTEGER,
    issueDescription: { type: Sequelize.TEXT, allowNull: false },
    issueStatus: { type: Sequelize.BOOLEAN, defaultValue: true }
  });

  return Case;
};
