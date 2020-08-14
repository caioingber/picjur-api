"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Posts", [
      {
        title: "Cute pupper",
        userId: 1,
        image:
          "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        caption: "cute lil fella",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mr Meow",
        userId: 2,
        image:
          "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400",
        caption: "can I has?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
