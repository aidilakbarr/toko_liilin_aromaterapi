import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";
import { AuthContext } from "../../context/AuthContext";

// import { useDispatch } from "react-redux";

export default function Register() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <div className="limiter">
      <div className="container-login100">
        <form onSubmit={registerUser}>
          <div className="wrap-login100">
            <span className="login100-form-title mt-5">Register</span>
            <div className="d-flex justify-content-center pb-5"></div>
            <div className="wrap-input100">
              <input
                name="fullname"
                className="input100"
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    fullname: e.target.value,
                  })
                }
              />
            </div>

            <div className="wrap-input100">
              <input
                className="input100"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
            </div>

            <div className="wrap-input100">
              <input
                className="input100"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <div className="wrap-input100">
              <input
                className="input100"
                type="text"
                placeholder="Phone"
                name="phone"
              />
            </div>

            <button className="login100-form-btn">
              {isRegisterLoading ? "Creating your account" : "Register"}
            </button>
            {registerError?.error && <p>{registerError?.message.msg}</p>}

            <div className="text-center py-4">
              <span className="txt1">Login?</span>
              &nbsp;
              <NavLink to="/signin" className="txt2">
                Click
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
