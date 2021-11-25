'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Content }) {
      // define association here
      this.belongsToMany(Content, { through: "Ratings" })
    }
  };
  User.init({
    name: {type: DataTypes.STRING, unique:true},
    email: {type: DataTypes.STRING, unique:true},
    isAdmin: {type: DataTypes.BOOLEAN, unique:true},
    password: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};