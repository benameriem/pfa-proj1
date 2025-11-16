const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    const oldUser = await User.findOne({ where: { email } });

    if (oldUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = await User.create({
      email,
      password: await bcrypt.hash(password, 10),
      ...rest,
    });

    const token = jwt.sign(
      {
        userId: newUser.id,
        role: newUser.role,
        department: newUser.department,
      },
      "secret_key",
      {
        expiresIn: "30days",
      }
    );

    delete newUser.password;

    return res
      .status(200)
      .json({ message: "User signed up successfully", newUser, token });
  } catch (error) {
    throw new Error("Signup failed: " + error.message);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exisitingUser = await User.findOne({ where: { email } });

    if (!exisitingUser) {
      throw new Error("Credentials are incorrect");
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      exisitingUser.password
    );

    if (!isPasswordValid) {
      throw new Error("Credentials are incorrect");
    }

    const token = jwt.sign(
      {
        userId: exisitingUser.id,
        role: exisitingUser.role,
        department: exisitingUser.department,
      },
      "secret_key",
      {
        expiresIn: "30days",
      }
    );

    delete exisitingUser.password;

    return res.status(200).json({
      message: "User signed up successfully",
      user: exisitingUser,
      token,
    });
  } catch (error) {
    throw new Error("Signup failed: " + error.message);
  }
};
