"use strict";
require("dotenv").config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cases",[
        {
          requestor: "John Doe",
          clientName: "Wal-Mart",
          financialImpact: 35000.0,
          submitDate: "2020-03-01",
          resolveDate: "2020-03-15",
          createdAt: new Date(),
          updatedAt: new Date(),

        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cases", null, {});
  }
};
