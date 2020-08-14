"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "johnnyDOE27",
          email: "johnnydoe2727@gmail.com",
          password: "Matabukar222!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "janePOE72",
          email: "janeydoey72727@gmail.com",
          password: "Matabukar555!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
