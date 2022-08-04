'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: DataTypes.STRING
  }, {
    modelName: 'User',
    timestamps: false,
  });

  return User;
};