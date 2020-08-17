const models = require("../../database/models/index");

const commentController = {
  getComments: (req, res) => {
    models.Comment.findAll({
      include: { model: models.User, as: "author" },
    }).then((data) => res.json(data));
  },
  getCommentById: (req, res) => {
    models.Comment.findByPk(req.params.id, {
      include: { all: true },
    }).then((data) => res.json(data));
  },
  addComment: (req, res) => {
    models.Comment.create(req.body).then(() => res.send("Comment added"));
  },
  deleteComment: (req, res) => {
    models.Comment.destroy({ where: { id: req.params.id } }).then(() =>
      res.send("Comment deleted")
    );
  },
};

module.exports = commentController;
