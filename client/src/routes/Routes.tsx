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
import DoctorHome from "../pages/Dashboard/Doctor/DoctorHome/DoctorHome";
import AddPrescription from "../pages/Dashboard/Doctor/AddPrescription/AddPrescription";
import AddedPresaipation from "../pages/Dashboard/Doctor/AddPrescription/AddedPresaipation";
import PrescriptionDeatils from "../pages/Dashboard/Doctor/AddPrescription/PrescriptionDeatils";
import HomeServices from "../pages/HomeServices/HomeServices";
import HSCardDeatils from "../pages/HomeServices/HServiceCard/HSCardDeatils";
import VideoChats from "../pages/VidoChats/VideoChats";
import VideoChatsPages from "../pages/VidoChats/VideoChatsPages";
import Payments from "../pages/Payments/Payments";
import PaymentHistory from "../pages/Dashboard/Patient/PaymentHistory";
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
      },
      {
        path: "/package",
        element: <PackagePrice></PackagePrice>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/solutions",
        element: <Solutions></Solutions>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "drCard",
        element: <DrCart></DrCart>,
      },{
        path:'/home-service',
        element:<HomeServices></HomeServices>
      },
      {
        path:'/home-serviceDeatils/:id',
        element:<HSCardDeatils></HSCardDeatils>,
        loader:({params})=>fetch(`http://localhost:5000/serviceDs/${params.id}`)
      },{
path:'/payments/:id',
element:<Payments></Payments>,
loader:({params})=>fetch(`http://localhost:5000/package-price/${params.id}`)
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

        path:'user-payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
      // --------------------this is the doctor dshboard route arey -----------------------------------
      {
        path: "doctor-appointment",
        element: <DoctorAppointment />,
      },{
path:'doctorHome',
element:<DoctorHome></DoctorHome>

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
      },
      {
path:'/dashboard/video-chats',
element:<VideoChats></VideoChats>
      }
       // --------------------this is the asmin dshboard route arey -----------------------------------
      ,{
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin-messages",
        element: <AdminMessages />,
      },
    ],
  },
  {
      path:'/room/:id',
      element:<VideoChatsPages></VideoChatsPages>
  }
]);

export default router;
