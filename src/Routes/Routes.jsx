import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import MySelectedClass from "../pages/Dashboard/StudentDashboard/MySelectedClass";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import ManageClasses from "../pages/Dashboard/AdminDasboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDasboard/ManageUsers";
import AddAClass from "../pages/Dashboard/InstructorDashboard/AddAClass";
import IsAdminRoutes from "./IsAdminRoutes";
import IsInstructorRoutes from "./IsInstructorRoutes";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard></Dashboard>
      </ProtectedRoutes>
    ),
    children: [
      // students routes
      {
        path: "myselectedclass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "myenrolledclass",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admins routes
      {
        path: "manageclasses",
        element: (
          <IsAdminRoutes>
            <ManageClasses></ManageClasses>
          </IsAdminRoutes>
        ),
      },
      {
        path: "manageusers",
        element: (
          <IsAdminRoutes>
            <ManageUsers></ManageUsers>
          </IsAdminRoutes>
        ),
      },

      // instructors routers
      {
        path: "addaclass",
        element: (
          <IsInstructorRoutes>
            <AddAClass></AddAClass>
          </IsInstructorRoutes>
        ),
      },
    ],
  },
]);

export default router;
