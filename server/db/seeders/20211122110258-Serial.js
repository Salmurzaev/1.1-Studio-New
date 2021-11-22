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
    await queryInterface.bulkInsert('Serials', [
      {
        title: 'Сериал 1',
      },
      {
        title: 'Сериал 2',
      },
      {
        title: 'Сериал 3',
      },
      {
        title: 'Сериал 4',
      },
      {
        title: 'Сериал 5',
      },
      {
        title: 'Сериал 6',
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
     await queryInterface.bulkDelete('Serials', null, {});
  }
};
