const models = require("../../database/models/index");

const postController = {
  getPosts: (req, res) => {
    models.Post.findAll({
      include: {
        model: models.User,
        as: "author",
        attributes: {
          exclude: ["id", "email", "password", "createdAt", "updatedAt"],
        },
      },
    }).then((data) => {
      res.json(data);
    });
  },
  getPostById: (req, res) => {
    models.Post.findByPk(req.params.id, {
      include: { all: true },
    }).then((data) => res.json(data));
  },
  addPost: (req, res) => {
    models.Post.create(req.body).then(() => res.send("Post added"));
  },
  deletePost: (req, res) => {
    models.Post.destroy({ where: { id: req.params.id } }).then(() =>
      res.send("Post deleted")
    );
  },
};

module.exports = postController;
