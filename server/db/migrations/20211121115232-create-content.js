'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      season_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Seasons",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      serial_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Serials",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      path_video: {
        type: Sequelize.STRING,
      },
      path_img: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Contents');
  }
};
