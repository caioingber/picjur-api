"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [
      {
        userId: 2,
        postId: 1,
        content: "Well hello there, Mr. pup!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        postId: 2,
        content: "Meow Meow, what a cutey!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
