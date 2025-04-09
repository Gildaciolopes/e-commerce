const jwt = require("jsonwebtoken");
const User = require("../models/User");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(statusCode).json({ token });
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};
