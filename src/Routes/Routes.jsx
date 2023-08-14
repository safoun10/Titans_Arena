import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import AllGames from "../Pages/AllGames/AllGames";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {

        path : "/allgame",
        element : <AllGames></AllGames>
      },
  {
        path: "/blogs",
        element: <Blogs/>,
      },

    ],
  },
]);

export default router;
