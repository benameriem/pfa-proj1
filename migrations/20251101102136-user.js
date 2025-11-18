"use strict";

const { userRoleList, departmentList } = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },

      role: {
        type: Sequelize.DataTypes.ENUM(Object.keys(userRoleList)),
        allowNull: true,
        defaultValue: userRoleList.EMPLOYEE,
      },

      department: {
        type: Sequelize.DataTypes.ENUM(Object.keys(departmentList)),
        allowNull: true,
        defaultValue: departmentList.GLOBAL,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
