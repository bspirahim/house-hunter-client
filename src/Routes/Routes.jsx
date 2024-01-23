import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OwnerDashboard from "../Layout/OwnerDashboard/OwnerDashboard";
import AddHouse from "../Pages/Dashboard/AddHouse/AddHouse";
import AllHouse from "../Pages/Dashboard/AllHouse/AllHouse";
import DashboardContent from "../Pages/Dashboard/DashboardContent";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
  },

  {
    path: '/owner-dashboard',
    element: <OwnerDashboard></OwnerDashboard>,
    children: [
      {
        path: '/owner-dashboard',
        element: <DashboardContent></DashboardContent>
      },
      {
        path: '/owner-dashboard/add-house',
        element: <AddHouse></AddHouse>
      },
      {
        path: '/owner-dashboard/all-house',
        element: <AllHouse></AllHouse>,
      }
   ]
  },

]);