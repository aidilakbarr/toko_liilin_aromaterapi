import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onAddProductClick, onEditProductClick }) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/findall");
    setUser(response.data);
    console.log(response.data);
  };

  const deleteUser = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/findall/${productId}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={onAddProductClick} className="button is-success">
        Add User
      </button>
      {users.length > 0 ? (
        <table className="table is-striped is-fullwidth mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Admin</th>
              <th>Created_At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.user_id}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>
                  {user.password.length > 15
                    ? user.password.slice(0, 15) + "..."
                    : user.password}
                </td>
                <td>{user.admin}</td>
                <td>{user.created_at}</td>
                <td>
                  <button
                    onClick={() => onEditProductClick(user)}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteUser(user.user_id)}
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

export default UserList;
