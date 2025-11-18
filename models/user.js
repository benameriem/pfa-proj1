// Load modules
const { DataTypes } = require("sequelize");
const database = require("../config/database");

const { userRoleList, departmentList } = require("../utils/constants");

const User = database.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    role: {
      type: DataTypes.ENUM(Object.keys(userRoleList)),
      allowNull: false,
      defaultValue: userRoleList.EMPLOYEE,
    },
    department: {
      type: DataTypes.ENUM(Object.keys(departmentList)),
      allowNull: false,
      defaultValue: departmentList.GLOBAL,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
