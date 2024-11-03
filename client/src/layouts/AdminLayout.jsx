import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";
import EditProduct from "../components/product/EditProduct";
import UserList from "../components/user/UserList";
import { AuthContext } from "../context/AuthContext";
import "./admin.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user, logOutUser } = useContext(AuthContext);

  useEffect(() => {
    if (activeSection === "Table") {
      setIsAddingProduct(false);
      setIsEditingProduct(false);
      setSelectedProduct(null);
    }
  }, [activeSection]);
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsAddingProduct(false); // Reset to product list when navigating away
    setIsEditingProduct(false);
    console.log(user);
  };

  const toggleAddProduct = () => {
    setIsAddingProduct(true);
    setIsEditingProduct(false); // Pastikan tidak dalam mode edit
    setSelectedProduct(null);
  };

  const finishAddProduct = () => {
    setIsAddingProduct(false); // Go back to ProductList view after adding product
  };

  const toggleEditProduct = (product) => {
    console.log("Editing product:", product); // Debugging
    setSelectedProduct(product); // Set produk yang dipilih terlebih dahulu
    setIsEditingProduct(true); // Kemudian aktifkan mode edit
    setIsAddingProduct(false); // Pastikan mode tambah tidak aktif
  };

  const finishEditProduct = () => {
    setIsEditingProduct(false);
    setSelectedProduct(null); // Reset produk yang terpilih
  };

  return (
    <div id="body-pd" className="body-pd">
      <header className="header" id="header">
        <div className="header_img">
          <p>Hello {user.fullname}</p>
        </div>
      </header>

      <div className="l-navbar show" id="nav-bar">
        <nav className="nav">
          <div>
            <div
              className="nav_logo"
              onClick={() => handleNavClick("Dashboard")}
            >
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Admin Dashboard</span>
            </div>
            <div className="nav_list">
              <div
                className={`nav_link ${
                  activeSection === "Dashboard" ? "active" : ""
                }`}
                onClick={() => handleNavClick("Dashboard")}
              >
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </div>
              <div
                className={`nav_link ${
                  activeSection === "Users" ? "active" : ""
                }`}
                onClick={() => handleNavClick("Users")}
              >
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Users</span>
              </div>
              <div
                className={`nav_link ${
                  activeSection === "Table" ? "active" : ""
                }`}
                onClick={() => handleNavClick("Table")}
              >
                <i className="bx bx-table nav_icon"></i>
                <span className="nav_name">Table</span>
              </div>
            </div>
          </div>
          <Link
            onClick={() => logOutUser()}
            to="/login"
            className="link-light text-decoration-none"
          >
            <div className="nav_link">
              <i className="bx bx-log-out nav_icon"></i>
              <span className="nav_name">SignOut</span>
            </div>
          </Link>
        </nav>
      </div>

      <div className="height-100 bg-light">
        <h4>{activeSection} Components</h4>
        <div className="height-90 color-black">
          {activeSection === "Dashboard" && <p>Dashboard content goes here.</p>}
          {activeSection === "Users" && <UserList />}
          {activeSection === "Table" &&
            (isAddingProduct ? (
              <AddProduct onFinishAdd={finishAddProduct} />
            ) : isEditingProduct ? (
              <EditProduct
                product={selectedProduct}
                onFinishEdit={finishEditProduct}
              />
            ) : (
              <ProductList
                onAddProductClick={toggleAddProduct}
                onEditProductClick={toggleEditProduct}
              />
            ))}
          {activeSection === "SignOut" && <p>SignOut content goes here.</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
