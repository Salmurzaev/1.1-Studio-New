'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Season }) {
      // define association here
      this.belongsTo(Season, { foreignKey: "id" })
    }
  };
  Content.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    season_id: DataTypes.INTEGER,
    serial_id: DataTypes.INTEGER,
    path_video: DataTypes.STRING,
    path_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};