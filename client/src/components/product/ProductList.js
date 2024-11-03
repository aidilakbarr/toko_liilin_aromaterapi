import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ onAddProductClick, onEditProductClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
    console.log(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={onAddProductClick} className="button is-success">
        Add Product
      </button>
      {products.length > 0 ? (
        <table className="table is-striped is-fullwidth mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Stok</th>
              <th>Aroma</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.product_id}>
                <td>{index + 1}</td>
                <td>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={product.image_url} alt="Images" />
                    </figure>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td>{product.aroma}</td>
                <td>
                  <button
                    onClick={() => onEditProductClick(product)}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.product_id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-3">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
