import React, { useState } from "react";
import Home from "../components/page/Home";
import Cart from "../layouts/cart"; // Pastikan Anda mengimpor komponen Cart
import Checkout from "../layouts/Checkout"; // Pastikan Anda mengimpor komponen Checkout
import ThankYou from "../layouts/Thankyou"; // Pastikan Anda mengimpor komponen ThankYou
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("home"); // State untuk mengontrol halaman aktif

  const handleCartClick = () => {
    setCurrentPage("cart"); // Mengubah state menjadi 'cart'
  };

  const handleCheckoutClick = () => {
    setCurrentPage("checkout"); // Mengubah state menjadi 'checkout'
  };

  const handleOrderComplete = () => {
    setCurrentPage("thankyou"); // Mengubah state menjadi 'thankyou'
  };

  const handleBackToHome = () => {
    setCurrentPage("home"); // Mengubah state menjadi 'home'
  };

  return (
    <div>
      <Header onCartClick={handleCartClick} />
      {currentPage === "home" && <Home />}
      {currentPage === "cart" && (
        <Cart
          onCheckoutClick={handleCheckoutClick}
          onBackToHome={handleBackToHome}
        />
      )}
      {currentPage === "checkout" && (
        <Checkout onOrderComplete={handleOrderComplete} />
      )}
      {currentPage === "thankyou" && (
        <ThankYou onBackToHome={handleBackToHome} />
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
