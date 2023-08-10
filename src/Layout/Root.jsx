import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  return (
    <div>
      <NavigationBar/>
      {/* <Navbar/> */}
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
