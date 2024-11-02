import React, { Fragment } from "react";
import HeaderAdmin from "../components/Admin/HeaderAdmin";
import ProductList from "../components/ProductList";

export default function AdminLayout() {
  return (
    <Fragment>
      <HeaderAdmin />
      <ProductList />
    </Fragment>
  );
}
