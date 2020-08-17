const models = require("../../database/models/index");

module.exports = {
  getUsers: (req, res) => {
    models.User.findAll().then((data) => res.json(data));
  },
  getUserById: (req, res) => {
    models.User.findByPk(req.params.id, {
      include: { all: true },
    }).then((data) => res.json(data));
  },
  addUser: (req, res) => {
    models.User.create(req.body).then(() => res.send("User added"));
  },
  deleteUser: (req, res) => {
    models.User.destroy({ where: { id: req.params.id } }).then(() =>
      res.send("User removed")
    );
  },
};
