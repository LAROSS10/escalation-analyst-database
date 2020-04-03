module.exports = function(sequelize, DataTypes) {
  let Case = sequelize.define("Case", {
    issueNumber: DataTypes.INTEGER,
    requestor: DataTypes.INTEGER,
    clientName: DataTypes.STRING,
    financialImpact: DataTypes.DECIMAL,
    submitDate: DataTypes.DATE,
    resolveDate: DataTypes.DATE,
    sales: DataTypes.STRING,
    accounting: DataTypes.STRING,
    contracts: DataTypes.STRING,
    pricing: DataTypes.STRING,
    escalationAnalyst: DataTypes.STRING,
    issueDescription: DataTypes.TEXT,
    issueStatus: DataTypes.TEXT
  });

  return Case;
};
