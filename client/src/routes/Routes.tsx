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
import AdminEditDoctors from "../pages/Dashboard/Admin/AdminEditDoctors";
import Total_Bed from "../pages/Dashboard/Admin/ActiveBed";
import DoctorHome from "../pages/Dashboard/Doctor/DoctorHome/DoctorHome";
import AddPrescription from "../pages/Dashboard/Doctor/AddPrescription/AddPrescription";
import AddedPresaipation from "../pages/Dashboard/Doctor/AddPrescription/AddedPresaipation";
import PrescriptionDeatils from "../pages/Dashboard/Doctor/AddPrescription/PrescriptionDeatils";
import HomeServices from "../pages/HomeServices/HomeServices";
import HSCardDeatils from "../pages/HomeServices/HServiceCard/HSCardDeatils";
import AdminAddDocotr from "../pages/Dashboard/Admin/AdminAddDocotr";
import PaymentPage from "../pages/Dashboard/Admin/PaymentPage";
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
        element: <SignUp />,
      },
      {
        path: "/package",
        element: <PackagePrice />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/drCart", // Correcting the typo and keeping DrCart
        element: <DrCart />,
      },
      {
        path: "/home-service", // Adding new route from development branch
        element: <HomeServices />,
      },
      {
        path: "/home-serviceDeatils/:id", // Adding dynamic route from development branch
        element: <HSCardDeatils />,
        loader: ({ params }) =>
          fetch(`https://lifeline-server.vercel.app/serviceDs/${params.id}`),
      },
    ],
  },

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
      // --------------------this is the doctor dshboard route arey -----------------------------------
      {
        path: "doctor-appointment",
        element: <DoctorAppointment />,
      }, {
        path: 'doctorHome',
        element: <DoctorHome></DoctorHome>


      },{
        path:'AddprescriptionTb',
        element:<AddPrescription></AddPrescription>
      },{
path:'/dashboard/added-prescription/:id',
element:<AddedPresaipation></AddedPresaipation>,
loader:({params})=>fetch(`https://lifeline-server.vercel.app/patient-deatils/${params.id}`)

      } ,{
        path:'/dashboard/prescriptionDeatils/:id',
        element:<PrescriptionDeatils></PrescriptionDeatils>,
        loader:({params})=>fetch(`https://lifeline-server.vercel.app/patients-deatils/${params.id}`)

      }
      // --------------------this is the asmin dshboard route arey -----------------------------------
      , {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin-messages",
        element: <AdminMessages />,
      },
      {
        path: 'admin-doctors',
        element: <AdminDoctors></AdminDoctors>
      },
      {
        path: 'total-bed',
        element: <Total_Bed></Total_Bed>
      },
      {
        path:"admin-add-doctor",
        element:<AdminAddDocotr></AdminAddDocotr>
      },
      {
        path: '/dashboard/admin-doctors/admin-edit-doctors/:id',
        element: <AdminEditDoctors></AdminEditDoctors>,
        loader: ({ params }) => fetch(`http://localhost:5000/admin/${params.id}`)
      },
      {
         path:'/dashboard/admin-doctors/payment/:id',
         element:<PaymentPage></PaymentPage>,
         loader: ({ params }) => fetch(`http://localhost:5000/admin/${params.id}`)
      }
    ],
  },
]);

export default router;
