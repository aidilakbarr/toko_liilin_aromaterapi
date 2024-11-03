import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./layouts/Dashboard";
import Admin from "./layouts/Admin";
import AdminLayout from "./layouts/AdminLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.default.css";
import "./css/custom.css";

function App() {
  const { user, isAuthLoading } = useContext(AuthContext); // Pastikan ada isAuthLoading di AuthContext

  // Tambahkan loading state untuk menghindari render saat data user masih dimuat
  console.log({ isAuthLoading });
  if (isAuthLoading) return <div>Loading...</div>;

  console.log({ user });
  console.log({ isAuthLoading });

  return (
    <Routes>
      <Route
        path="/admin-dashboard"
        element={
          user?.admin === "1" ? <AdminLayout /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
