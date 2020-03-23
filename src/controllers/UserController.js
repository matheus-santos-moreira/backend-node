const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }
}