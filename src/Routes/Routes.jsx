import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Support from "../Pages/Support/Support";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllGames from "../Pages/AllGames/AllGames";
import Blogs from "../Pages/Blogs/Blogs";
import GamesDetails from "../Pages/GamesDetails/GamesDetails";
import SingleBlog from "../Pages/Blogs/SingleBlog/SingleBlog";
import Esports from "../Pages/Esports/Components/Esports";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";

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
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/games/:id",
        element: <GamesDetails />,
      },
      {
        path: "/esports",
        element: <Esports></Esports>,
      },
    ],
  },
  {
    path : "/dashboard",
    element : <DashboardLayout></DashboardLayout>,
    children : [
      {
        path : "/dashboard",
        element : <Dashboard></Dashboard>
      }
    ]
  }
]);

export default router;
