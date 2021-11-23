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
    static associate({ Season, Serial, User }) {
      // define association here
      this.belongsTo(Season, { foreignKey: "season_id" })
      this.belongsTo(Serial, { foreignKey: "serial_id" })
      this.belongsToMany(User, { through: "Ratings" })

    }
  };
  Content.init({
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