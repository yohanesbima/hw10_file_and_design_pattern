'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: "Avatar of Anger",
        genres: "Action",
        year: "2012",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Shaun The Sheep",
        genres: "Cartoon",
        year: "2007",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Doraemon",
        genres: "Cartoon",
        year: "1997",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
