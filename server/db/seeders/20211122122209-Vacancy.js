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
    await queryInterface.bulkInsert('Vacancies', [
      {
        title: 'Вакансия 1',
        desc: "Описание вакансии 1",
        curator: "Куратор вакансии 1",
        curator_email: "curator1@11.kg",
        curator_phone: "+123456789",
      },
      {
        title: 'Вакансия 2',
        desc: "Описание вакансии 2",
        curator: "Куратор вакансии 2",
        curator_email: "curator2@11.kg",
        curator_phone: "+123456789",
      },
      {
        title: 'Вакансия 3',
        desc: "Описание вакансии 3",
        curator: "Куратор вакансии 3",
        curator_email: "curator3@11.kg",
        curator_phone: "+123456789",
      },
      {
        title: 'Вакансия 4',
        desc: "Описание вакансии 4",
        curator: "Куратор вакансии 4",
        curator_email: "curator4@11.kg",
        curator_phone: "+123456789",
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
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
