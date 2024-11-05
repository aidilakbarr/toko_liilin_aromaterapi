import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css"; // Pastikan file CSS ini sudah dihubungkan dengan benar

const ThankYouSection = ({ onBackToHome }) => (
  <div className="untree_co-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center pt-5">
          <span className="display-3 thankyou-icon text-primary">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cart-check mb-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </span>
          <h2 className="display-3 text-black">Thank you!</h2>
          <p className="lead mb-5">Your order was successfully completed.</p>
          <button
            className="btn btn-sm btn-outline-black"
            onClick={onBackToHome}
          >
            Back to shop
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ThankYouSection;