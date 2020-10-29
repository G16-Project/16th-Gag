'use strict';
const { request } = require('express');
const {
  Model
} = require('sequelize');

const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'email cannot be empty!'
        },
        notNull: {
          args: true,
          message: 'email cannot be empty!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'password is required!'
        },
        notNull: {
          args: true,
          message: 'password is required!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user){
        user.password = hashPassword(user.password);
      }
    }
  });
  return User;
};