import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import SearchPage from "../page/SearchPage.jsx";
import ProductDetails from "../page/ProductDetails/v1/ProductDetails.jsx";
import AddToCart from "../page/AddToCart/v1/AddToCart.jsx";
import EmptyCart from "../page/EmptyCart/v1/EmptyCart.jsx";
import Shop from "../page/Shop/v1/Shop.jsx";
import Page404 from "../page/BrokenPage/v1/Page404.jsx";
import Login from "../page/Auth/v1/Login/Login.jsx";
import Register from "../page/Auth/v1/Register/Register.jsx";
import ForgotPassword from "../page/Auth/v1/Forgot/ForgotPassword.jsx";
import Maintenance from "../page/BrokenPage/v1/Maintenance.jsx";
import ComingSoon from "../page/BrokenPage/v1/ComingSoon.jsx";
import TermsOfUse from "../page/Policy/TermsOfUse.jsx";
import PrivacyPolicy from "../page/Policy/PrivacyPolicy.jsx";
import Checkout from "../page/Checkout/v1/Checkout.jsx";
import Dashboard from "../page/Dashboard/v1/Dashboard.jsx";
import Faq from "../page/Faq/Faq.jsx";

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
    path: "/product",
    element: <ProductDetails />,
  },
  {
    path: "/addtocart",
    element: <AddToCart />,
  },
  {
    path: "/emptycart",
    element: <EmptyCart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
  {
    path: "/term-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/faqs",
    element: <Faq />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
