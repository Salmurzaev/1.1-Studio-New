'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Seasons', [
      {
        title: 'Сезон 1',
        serial_id: 1
      },
      {
        title: 'Сезон 2',
        serial_id: 1
      },
      {
        title: 'Сезон 3',
        serial_id: 1
      },
      {
        title: 'Сезон 1',
        serial_id: 2
      },
      {
        title: 'Сезон 2',
        serial_id: 2
      },
      {
        title: 'Сезон 3',
        serial_id: 2
      },
      {
        title: 'Сезон 4',
        serial_id: 2
      },
      {
        title: 'Сезон 5',
        serial_id: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seasons', null, {});
  }
};
