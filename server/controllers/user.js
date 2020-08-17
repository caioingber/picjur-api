const models = require("../../database/models/index");

module.exports = {
  getUsers: (req, res) => {
    models.User.findAll().then((data) => res.json(data));
  },
};
