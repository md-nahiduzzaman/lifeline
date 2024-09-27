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
      },{
        path:'/package',
        element:<PackagePrice></PackagePrice>
      },{
        path:'/about',
        element:<About></About>
      },{

        path:'/solutions',
        element:<Solutions></Solutions>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'drCard',
        element:<DrCart></DrCart>
      }
    ],
  },
  // { path: "/login", element: <Login /> },
  // { path: "/signup", element: <SignUp /> },
  //   dashboard here
]);

export default router;
