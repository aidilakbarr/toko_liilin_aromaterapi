import React, { useContext, useEffect, useState } from "react";
import "../../css/home.css";
// import Search from "./Search";
// import Sort from "./Sort";
import { AuthContext } from "../../context/AuthContext";

export default function Shop() {
  const { product } = useContext(AuthContext);
  console.log(product);

  // const handleSearch = (value) => {
  //   setPagination({
  //     page: pagination.page,
  //     size: pagination.size,
  //     search: value,
  //     category: pagination.category,
  //   });
  // };

  // const handleSort = (value) => {
  //   setSort(value);
  // };

  return (
    <div className="container">
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Shop</h1>
            </div>
            <div className="col-lg-6 text-lg-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {product?.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                <a className="product-item" href="#">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{item.name}</h3>
                  <strong className="product-price">${item.price}</strong>
                  <span className="icon-cross">
                    <img
                      src="image/cross.svg"
                      className="img-fluid"
                      alt="cross"
                    />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {product?.map((item, index) => (
        <div
          className=" fade show"
          id={`product_${item.product_id}`}
          key={index}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="row align-items-stretch">
                  <div className="col-lg-6 p-lg-0">
                    <img
                      style={{ width: "100%" }}
                      className="product-view d-block h-100 bg-cover bg-center"
                      src={item.image_url}
                      data-lightbox={`product_${item.image_url}`}
                    />
                  </div>
                  <div className="col-lg-6">
                    <a
                      className="close p-4"
                      type="button"
                      href="#section_product"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      ×
                    </a>
                    <div className="p-5 my-md-4">
                      <ul className="list-inline mb-2">
                        <li className="list-inline-item m-0">
                          <i className="fas fa-star small text-warning"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fas fa-star small text-warning"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fas fa-star small text-warning"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fas fa-star small text-warning"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fas fa-star small text-warning"></i>
                        </li>
                      </ul>
                      <h2 className="h4">{item.name}</h2>
                      <p className="text-muted font-weight-bold">
                        ${item.price}
                      </p>
                      <p className="text-small mb-4">{item.description}</p>
                      <div className="row align-items-stretch mb-4">
                        <div className="col-sm-5 pl-sm-0 fix_addwish">
                          <a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">
                            <i className="far fa-heart mr-2"></i>Add Too Wish
                            List
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
