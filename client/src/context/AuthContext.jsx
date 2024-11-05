import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl, postRequest, getRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getRequest(`${baseUrl}/products`);
        setProduct(products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);
  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsRegisterLoading(true);
      setRegisterError(null);
      console.log("data::: ", registerInfo);

      console.log("1: ", `${baseUrl}/register`);

      const response = await postRequest(
        `${baseUrl}/register`,
        JSON.stringify(registerInfo)
      );
      console.log("2: ", response);

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);

      // Arahkan ke halaman login menggunakan path relatif
      navigate("/login");
    },
    [navigate, registerInfo]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/login`,
        JSON.stringify(loginInfo)
      );

      console.log("2: ", response);

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);

      // Gunakan path relatif
      if (response.admin == "1") {
        console.log("sukses, ke /admin-dashboard");
        navigate("/admin-dashboard");
      } else {
        console.log("bukan admin, ke /");
        navigate("/");
      }
    },
    [loginInfo, navigate]
  );

  const logOutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
    loginInfo(null);
  }, [loginInfo]);

  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
    setIsAuthLoading(false); // Ubah ke false setelah data user didapatkan
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logOutUser,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading,
        isAuthLoading,
        product,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
