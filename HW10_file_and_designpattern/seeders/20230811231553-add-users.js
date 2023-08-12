'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: "yohanesbimas@gmail.com",
        gender: "Male",
        password: "punyasaya",
        role: "Project Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "yohanesbimas2nd@gmail.com",
        gender: "Male",
        password: "siapanihya",
        role: "Head of Dev",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
