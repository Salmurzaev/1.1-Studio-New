'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Content, Serial }) {
      // define association here
      this.hasMany(Content, { foreignKey: 'season_id' })
      this.belongsTo(Serial, { foreignKey: 'serial_id' })
    }
  };
  Season.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    serial_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Season',
  });
  return Season;
};