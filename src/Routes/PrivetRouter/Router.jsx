import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Layouts/MainLayouts/MainLayouts";
import Home from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Components/Home/Home/Home";
import Login from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Share/Login/Login";
import SignUp from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Share/SignUp/SignUp";
import Dashbord from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/Dashbord";
import MyEnrolled from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/MyEnrolled/MyEnrolled";
// import Payment from "../../Pages/Dashobord/Payment/Payment";
import Class from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Class/Class";
import MyClass from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/MyClass/MyClass";
import Instructors from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Instructors/Instructors";
import ManageUser from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/ManageUser/ManageUser";
import AddClass from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/AddClass/AddClass";
import PrivetRouter from "./PrivetRouter";
import InstructorClasses from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/AddClass/InstructorClasses/InstructorClasses";
import ManageClass from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Dashobord/ManageClass/ManageClass";
import Error from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Components/Home/Error/Error";
import Payment from "../../../../../../PH-HERO-COURSE-CLASS-CODE/MileStone-12/assignment/Summer-Camp-Learning-School-client-code/src/Pages/Payments/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/instructor",
        element: <Instructors></Instructors>,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivetRouter>
        {" "}
        <Dashbord></Dashbord>{" "}
      </PrivetRouter>
    ),
    children: [
      {
        path: "myEnroll",
        element: <MyEnrolled></MyEnrolled>,
      },

      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "InstructorClass",
        element: <InstructorClasses></InstructorClasses>,
      },
      {
        path: "manageClass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "payment",

        element: <Payment></Payment>,
      },
    ],
  },
]);
