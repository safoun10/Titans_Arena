import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);

export default router;
