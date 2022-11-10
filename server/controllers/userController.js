const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password, date } = req.body;
    const alreadyExists = await User.findOne({ email: email });
    if (alreadyExists) {
      res.status(409).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password, date });
    if (!user) {
      res.status(400).json({ message: "User not created" });
    }
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(400).json({ message: "No users found" });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = { createUser, getUsers };
