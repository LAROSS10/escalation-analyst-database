const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  let Case = sequelize.define("Case", {
    //issueNumber: DataTypes.INTEGER,
    requestor: { type: Sequelize.INTEGER, allowNull: false },
    clientName: { type: Sequelize.STRING, allowNull: false },
    financialImpact: { type: Sequelize.DECIMAL },
    //submitDate: DataTypes.DATE,
    resolveDate: DataTypes.DATE,
    //sales: DataTypes.STRING,
    //accounting: DataTypes.STRING,
    //contracts: DataTypes.STRING,
    //pricing: DataTypes.STRING,
    department: { type: Sequelize.STRING, allowNull: false },
    escalationAnalyst: { type: Sequelize.INTEGER },
    issueDescription: { type: Sequelize.TEXT, allowNull: false },
    issueStatus: { type: Sequelize.BOOLEAN, defaultValue: true }
  });

  return Case;
};
