import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const NavLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default NavLayout;
