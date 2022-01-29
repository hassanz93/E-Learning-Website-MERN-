
  const User = require("../models/user");

  
  module.exports = {
    
  findUsers: async (req, res) => {
    const users = await User.find();
    res.send({ data: users });
  },

  createUser: async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ data: user });
  },

  findUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.send({ data: user });
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      Object.assign(user, req.body);
      user.save();
      res.send({ data: user });
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  deleteUser : async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        await user.remove();
        res.send({ data: true });
      } catch {
        res.status(404).send({ error: "user is not found!" });
      }
    },

    

};

