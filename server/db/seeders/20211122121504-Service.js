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
    await queryInterface.bulkInsert('Services', [
      {
        title: "Услуга 1",
        desc: "Описание услуги 1"
      },
      {
        title: "Услуга 2",
        desc: "Описание услуги 2"
      },
      {
        title: "Услуга 3",
        desc: "Описание услуги 3"
      },
      {
        title: "Услуга 4",
        desc: "Описание услуги 4"
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
    await queryInterface.bulkDelete('Services', null, {});
  }
};
