import DataTypes from "sequelize";
import db from "../config/Database.js";

const CartItem = db.define(
  "CartItem",
  {
    cart_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "carts",
        key: "cart_id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "product_id",
      },
    },
    aroma: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default CartItem;
