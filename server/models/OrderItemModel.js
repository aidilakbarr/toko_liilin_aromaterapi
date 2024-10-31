import DataTypes from "sequelize";
import db from "../config/Database.js";

const OrderItem = db.define(
  "OrderItem",
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "orders",
        key: "order_id",
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

export default OrderItem;
