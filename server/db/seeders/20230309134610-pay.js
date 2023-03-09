/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Pays",
      [
        {
          name: "QIWI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bankcard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "YANDEX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SBP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Pays", null, {});
  },
};
