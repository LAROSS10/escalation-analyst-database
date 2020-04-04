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
          
          createdAt: new Date(),
          updatedAt: new Date(),
          issueDescription: "thisis a test"

        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cases", null, {});
  }
};
