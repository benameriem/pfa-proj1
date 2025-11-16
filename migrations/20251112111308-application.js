"use strict";

const { applicationStatusList } = require("../utils/constants");

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
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      department: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      status: {
        type: Sequelize.DataTypes.ENUM(Object.keys(applicationStatusList)),
        allowNull: true,
        defaultValue: applicationStatusList.ACTIVE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Applications");
  },
};
