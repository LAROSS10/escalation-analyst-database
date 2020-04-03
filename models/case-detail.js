module.exports = function(sequelize, DataTypes) {
  let Case = sequelize.define("Case", {
    businessSegment: DataTypes.STRING,
    issueType: DataTypes.STRING,
    issueDescription: DataTypes.TEXT,
    issueStatus: DataTypes.TEXT,
    issueNumber: DataTypes.INTEGER,
    submitDate: DataTypes.DATE,
    resolveDate: DataTypes.DATE,
    requestor: DataTypes.STRING,
    financialImpact: DataTypes.DECIMAL,
    departmentID: DataTypes.INTEGER
  });

  return Case;
};
