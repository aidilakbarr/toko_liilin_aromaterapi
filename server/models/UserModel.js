import DataTypes from "sequelize";
import db from "../config/Database.js";

const User = db.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 30,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 10,
        max: 50,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
      },
    },
    admin: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

export default User;
