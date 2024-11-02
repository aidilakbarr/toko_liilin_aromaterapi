import express from "express";
import argon2 from "argon2";
import validator from "validator";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

const createToken = (id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ id }, jwtkey, { expiresIn: "3d" });
};

export const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log("satu berhasil");

  let users = await User.findOne({
    attributes: ["email"],
    where: {
      email: email,
    },
  });
  console.log("dua berhasil");

  if (users?.email)
    return res
      .status(400)
      .json({ msg: "User with the given email already exist..." });

  if (!fullname || !email || !password)
    return res.status(400).json({ msg: "All field are required..." });

  if (!validator.isEmail(email))
    return res.status(400).json({ msg: "Email must be a valid email" });

  if (!validator.isStrongPassword(password))
    return res.status(400).json({ msg: "Password must be a strong password" });

  console.log("tiga berhasil");

  const hashPassword = await argon2.hash(password);

  try {
    const user = await User.create({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    const token = createToken(user.user_id);
    res.status(201).json({
      msg: "Register berhasil",
      id: user.user_id,
      fullname,
      email,
      token,
      admin: user.admin,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "All field are required..." });

  try {
    let user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user?.email)
      return res.status(400).json({ msg: "Invalid email or password" });

    const match = await argon2.verify(user.password, password);
    if (!match)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = createToken(user.id);

    res.status(201).json({
      msg: "Login berhasil",
      id: user.id,
      fullname: user.fullname,
      email,
      admin: user.admin,
      token,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const findAllUser = async (req, res) => {
  try {
    const user = await User.findAll();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
