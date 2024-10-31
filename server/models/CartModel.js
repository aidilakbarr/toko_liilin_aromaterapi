import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Cart = db.define(
  "Cart",
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Ubah ke "users"
        key: "user_id",
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

export default Cart;
