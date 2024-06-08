import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/slices/userSlice";
import Router from "./routes/Router.jsx";
import GlobalStyle from "./styles/Globalstyle";
import supabase from "./supabaseClient";
function App() {
  const dispatch = useDispatch();
  async function checkLogin() {
    const session = await supabase.auth.getSession();
    const user = session.data.session?.user;
    if (user) {
      dispatch(login(user));
    } else {
      dispatch(logout());
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}
export default App;
