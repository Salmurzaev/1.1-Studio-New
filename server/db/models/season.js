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
      this.hasMany(Content, { foreignKey: 'id' })
      this.belongsTo(Serial, { foreignKey: 'seasons_id' })
    }
  };
  Season.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    content_id: DataTypes.UUID,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Season',
  });
  return Season;
};