// models.js
import db from "../config/Database.js";
import User from "./UserModel.js";
import Product from "./ProductModel.js";
import Cart from "./CartModel.js"; // perbaikan penamaan file
import CartItem from "./CartItemModel.js";
import Order from "./OrderModel.js";
import OrderItem from "./OrderItemModel.js";

// Setup relasi antar model
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

User.hasOne(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

Product.hasMany(CartItem, { foreignKey: "product_id" });
CartItem.belongsTo(Product, { foreignKey: "product_id" });

// Export
export { db, User, Product, Order, OrderItem, Cart, CartItem };
