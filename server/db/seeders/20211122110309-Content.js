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
    await queryInterface.bulkInsert('Contents', [
      {
        title: 'Фильм 1',
        desc: "Описание фильма 1",
        season_id: null,
        serial_id: null,
        path_video: 'http://localhost:3001/video',
        path_img: 'https://fs.kinomania.ru/image/file/film_poster/7/aa/7aa440389afcf90bf406a30c04277566.738.369.jpeg'
      },
      {
        title: 'Фильм 2',
        desc: "Описание фильма 2",
        season_id: null,
        serial_id: null,
        path_video: 'qqqqqqqqqqq',
        path_img: 'https://2datyvyhoda.ru/wp-content/uploads/2021/05/Shang-Chi-and-the-Legend-of-the-Ten-Rings-2021.jpg'
      },
      {
        title: 'Cерия 1',
        desc: "Описание 1",
        season_id: 1,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 2',
        desc: "Описание 2",
        season_id: 1,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 3',
        desc: "Описание 3",
        season_id: 1,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 1',
        desc: "Описание 1",
        season_id: 2,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 2',
        desc: "Описание 2",
        season_id: 2,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 3',
        desc: "Описание 3",
        season_id: 2,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 1',
        desc: "Описание 1",
        season_id: 3,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 2',
        desc: "Описание 2",
        season_id: 3,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 3',
        desc: "Описание 3",
        season_id: 3,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
      },
      {
        title: 'Cерия 4',
        desc: "Описание 4",
        season_id: 3,
        serial_id: 1,
        path_video: 'qqqqqqqqqqq',
        path_img: 'wwwwwwwww'
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
    await queryInterface.bulkDelete('Contents', null, {});
  }
};
