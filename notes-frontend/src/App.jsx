import Navbar from "./components/NavBar/NavBar";
import Notes from "./components/Notes/Notes";
import { useEffect } from "react";
import { onLogin } from "./store/authSlice";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      dispatch(onLogin(JSON.parse(user)));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Notes />
    </>
  );
}

export default App;
