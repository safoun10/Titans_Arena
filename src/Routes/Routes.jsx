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
import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import AddToCart from "../Pages/Dashboard/Members/AddToCart/AddToCart";
import EnrolledTour from "../Pages/Dashboard/Members/EnrolledTour/EnrolledTour";
import Profile from "../Pages/Dashboard/DashboardComponents/Profile";
import BlogManagement from "../Pages/Dashboard/Admin/BlogsManagement/BlogManagement";
import AddBlog from "../Pages/Dashboard/Admin/addBlog/AddBlog";

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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "selectedGames",
        element: <AddToCart />,
      },
      {
        path: "enrolledTour",
        element: <EnrolledTour />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "blogManagement",
        element: <BlogManagement />,
      },
      {
        path: "addblog",
        element: <AddBlog />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 | Page not found</div>,
  },
]);

export default router;
