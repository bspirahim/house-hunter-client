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
import UpdateHouse from "../Pages/Dashboard/AllHouse/UpdateHouse";
import ViewDetails from "../Pages/Houses/ViewDetails";




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
        path: '/house/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/house/${params.id}`)
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
      },
      {
        path: '/owner-dashboard/update-house/:id',
        element: <UpdateHouse></UpdateHouse>,
        loader: ({ params }) => fetch(`http://localhost:5000/house/${params.id}`)
      },
   ]
  },

]);