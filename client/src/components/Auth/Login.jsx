import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";

export default function Login() {
  const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <span className="login100-form-title mt-5">Login</span>
          <div className="d-flex justify-content-center pb-5"></div>

          <div className="wrap-input100">
            <input
              className="input100"
              type="text"
              placeholder="Email"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
          </div>

          <div className="wrap-input100">
            <input
              className="input100"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </div>

          <button className="login100-form-btn" onClick={loginUser}>
            {isLoginLoading ? "Getting you in..." : "Login"}
          </button>
          {loginError?.error && <p>{loginError?.message.msg}</p>}

          <div className="text-center py-4">
            <span className="txt1">Create an account?</span>
            &nbsp;
            <NavLink to="/register" className="txt2">
              Click
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
