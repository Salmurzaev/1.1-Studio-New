'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Season, Content }) {
      // define association here
      this.hasMany(Season, { foreignKey: "serial_id" })
      this.hasMany(Content, { foreignKey: "serial_id" })
    }
  };
  Serial.init({
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Serial',
  });
  return Serial;
};