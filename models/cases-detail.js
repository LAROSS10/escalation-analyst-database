module.exports = function(sequelize, DataTypes) {
  var CasesDetail = sequelize.define("CasesDetail", {
    businessSegment: DataTypes.STRING
  });

  return CasesDetail;
};
