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
        group: 'продюсеры',
        name: 'АСКАТ ТАБАЛДИЕВ',
        path_img: "./images/2.jpg"
      },
      {
        group: 'продюсеры',
        name: 'ДАНИЯР БОЛОТБЕКОВ',
        path_img: "./images/1.jpg"
      },
      {
        group: 'продюсеры',
        name: 'РОСТИСТЛАВ ЯЩЕНКО',
        path_img: "./images/3.jpg"
      },
      {
        group: 'продюсеры',
        name: 'БАХТИЯР МАТЯНЬЮ',
        path_img: "./images/4.jpg"
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
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
