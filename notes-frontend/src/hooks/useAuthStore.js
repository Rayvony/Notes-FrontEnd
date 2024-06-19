import { useDispatch, useSelector } from "react-redux";
import { noteAPI } from "../api/noteAPI";
import { onLogin, onLogout } from "../store/authSlice";
import Cookies from "js-cookie";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const login = async (username, password) => {
    try {
      const { data } = await noteAPI.post("users/login", {
        username,
        password,
      });
      Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
      dispatch(onLogin(data.user));
    } catch (error) {
      throw new Error("Wrong username or password");
    }
  };

  const logout = () => {
    Cookies.remove("user");
    dispatch(onLogout());
  };

  const register = async (username, password) => {
    try {
      const { data } = await noteAPI.post("users/register", {
        username,
        password,
      });
      login(username, password);
    } catch (error) {
      console.error(error);
    }
  };

  return { status, user, login, logout, register };
};
