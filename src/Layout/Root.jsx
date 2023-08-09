import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet />
    </div>
  );
};

export default Root;
