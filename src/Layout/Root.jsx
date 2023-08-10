import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
