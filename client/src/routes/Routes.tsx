import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PackagePrice from "../pages/Package/PackagePrice";
import About from "../pages/About/About";
import Solutions from "../pages/Solutions/Solutions";
import DrCart from "../components/DrCart/DrCart";
import DashboardLayout from "../layouts/DashboardLayout";

import Statistics from "../pages/Dashboard/Common/Statistics";
import PatientAppointment from "../pages/Dashboard/Patient/PatientAppointment";
import PatientPrescription from "../pages/Dashboard/Patient/PatientPrescription";
import PatientHealthRecord from "../pages/Dashboard/Patient/PatientHealthRecord";
import DoctorAppointment from "../pages/Dashboard/Doctor/DoctorAppointment";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AdminMessages from "../pages/Dashboard/Admin/AdminMessages";
import AdminDoctors from "../pages/Dashboard/Admin/AdminDoctors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }, {
        path: '/package',
        element: <PackagePrice></PackagePrice>
      }, {
        path: '/about',
        element: <About></About>
      }, {

        path: '/solutions',
        element: <Solutions></Solutions>
      }, {
        path: '/login',
        element: <Login></Login>
      }, {
        path: '/drCart',
        element: <DrCart></DrCart>
      }
    ],
  },
  // { path: "/login", element: <Login /> },
  // { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "patient-appointment",
        element: <PatientAppointment />,
      },
      {
        path: "patient-prescription",
        element: <PatientPrescription />,
      },
      {
        path: "patient-record",
        element: <PatientHealthRecord />,
      },
      {
        path: "doctor-appointment",
        element: <DoctorAppointment />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin-messages",
        element: <AdminMessages />,
      },
      {
        path:'admin-doctors',
        element:<AdminDoctors></AdminDoctors>
      }
    ],
  },
]);

export default router;
