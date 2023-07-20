import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import SearchPage from "../page/SearchPage.jsx";
import ProductDetails from "../page/ProductDetails/v1/ProductDetails.jsx";
import AddToCart from "../page/AddToCart/v1/AddToCart.jsx";
import Shop from "../page/Shop/v1/Shop.jsx";
import Page404 from "../page/BrokenPage/v1/Page404.jsx";
import Login from "../page/Auth/v1/Login/Login.jsx";
import Register from "../page/Auth/v1/Register/Register.jsx";
import ForgotPassword from "../page/Auth/v1/Forgot/ForgotPassword.jsx";
import Maintenance from "../page/BrokenPage/v1/Maintenance.jsx";
import ComingSoon from "../page/BrokenPage/v1/ComingSoon.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/product-details",
    element: <ProductDetails />,
  },
  {
    path: "/addtocart",
    element: <AddToCart />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/*",
    element: <Page404 />,
  },
  {
    path: "/maintenance",
    element: <Maintenance />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);
