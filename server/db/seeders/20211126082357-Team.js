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
    await queryInterface.bulkInsert('Teams', [
      {
        name: 'АСКАТ ТАБАЛДИЕВ',
        group: "Продюсеры",
        path_img: 'http://localhost:3001/images/1.jpg'
      },
      {
        name: 'ДАНИЯР БОЛОТБЕКОВ',
        group: "Продюсеры",
        path_img: 'http://localhost:3001/images/2.jpg'
      },
      {
        name: 'РОСТИСТЛАВ ЯЩЕНКО',
        group: "Продюсеры",
        path_img: 'http://localhost:3001/images/3.jpg'
      },
      {
        name: 'БАХТИЯР МАТЯНЬЮ',
        group: "Продюсеры",
        path_img: 'http://localhost:3001/images/4.jpg'

      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
