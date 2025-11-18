// Load modules
const { DataTypes } = require("sequelize");
const database = require("../config/database");
const {
  applicationStatusList,
  applicationPerformanceList,
  departmentList,
} = require("../utils/constants");

const Application = database.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    theme: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    performance: {
      type: DataTypes.ENUM(Object.values(applicationPerformanceList)),
      allowNull: false,
      defaultValue: applicationPerformanceList.Bon,
    },

    department: {
      type: DataTypes.ENUM(Object.values(departmentList)),
      allowNull: false,
      defaultValue: departmentList.GLOBAL,
    },

    status: {
      type: DataTypes.ENUM(Object.values(applicationStatusList)),
      allowNull: false,
      defaultValue: applicationStatusList.ACTIVE,
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Application;
