// Load modules
const { DataTypes } = require("sequelize");
const database = require("../config/database");
const { applicationStatusList } = require("../utils/constants");

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
      type: DataTypes.STRING,
      allowNull: true,
    },

    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(Object.values(applicationStatusList)),
      allowNull: false,
      defaultValue: applicationStatusList.ACTIVE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Application;
