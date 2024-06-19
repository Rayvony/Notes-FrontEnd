import { useDispatch, useSelector } from "react-redux";
import { noteAPI } from "../api/noteAPI";
import { onLogin, onLogout } from "../store/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const login = async (username, password) => {
    try {
      const { data } = await noteAPI.post("users/login", {
        username,
        password,
      });
      dispatch(onLogin(data.user));
    } catch (error) {
      throw new Error("Wrong username or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(onLogout());
  };

  const register = async (username, password) => {
    try {
      const { data } = await noteAPI.post("users/register", {
        username,
        password,
      });
      dispatch(onLogin(data.user));
    } catch (error) {
      console.error(error);
    }
  };

  return { status, user, login, logout, register };
};
