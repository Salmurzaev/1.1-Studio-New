'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      season_id: {
        type: DataTypes.UUID,
        references: {
          model: "Seasons",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      serial_id: {
        type: DataTypes.UUID,
        references: {
          model: "Serials",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      path_video: {
        type: DataTypes.STRING,
        allowNull: false
      },
      path_img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Contents');
  }
};