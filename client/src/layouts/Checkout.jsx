import React from "react";
import "../css/home.css"; // Make sure to adjust the paths according to your structure

const Checkout = ({ onOrderComplete }) => {
  return (
    <div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_fname" className="text-black">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_lname" className="text-black">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_state_country" className="text-black">
                      State / Country <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_state_country"
                      name="c_state_country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_postal_zip" className="text-black">
                      Postal / Zip <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_postal_zip"
                      name="c_postal_zip"
                    />
                  </div>
                </div>
                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label htmlFor="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Your Order</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group">
                  <h4 className="h4">Cart Item</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Item Name</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>Item 1</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$20.00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Item 2</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$25.00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Item 3</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$30.00</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>Subtotal</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$75.00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Shipping</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$5.00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Total</span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-black">$80.00</span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onOrderComplete}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
