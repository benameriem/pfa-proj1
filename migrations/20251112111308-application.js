"use strict";

const {
  applicationStatusList,
  applicationPerformanceList,
  departmentList,
} = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Applications", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      theme: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      performance: {
        type: Sequelize.DataTypes.ENUM(
          Object.values(applicationPerformanceList)
        ),
        allowNull: true,
        defaultValue: applicationPerformanceList.Bon,
      },

      department: {
        type: Sequelize.DataTypes.ENUM(Object.values(departmentList)),
        allowNull: false,
        defaultValue: departmentList.GLOBAL,
      },

      status: {
        type: Sequelize.DataTypes.ENUM(Object.values(applicationStatusList)),
        allowNull: true,
        defaultValue: applicationStatusList.ACTIVE,
      },

      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Applications");
  },
};
