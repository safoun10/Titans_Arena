import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="md:min-h-[calc(100vh-450px)]">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
