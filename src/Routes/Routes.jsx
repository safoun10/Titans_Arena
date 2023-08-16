import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import SupportSection from "../Pages/SupportSection/SupportSection";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allgame",
        element: <AllGames></AllGames>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/support",
        element: <SupportSection />,
      },
    ],
  },
]);

export default router;
