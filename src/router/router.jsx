import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import SearchPage from "../page/SearchPage.jsx";
import ProductDetails from "../page/ProductDetails/v1/ProductDetails.jsx";
import AddToCart from "../page/AddToCart/v1/AddToCart.jsx";
import EmptyCart from "../page/EmptyCart/v1/EmptyCart.jsx";
import Shop from "../page/Shop/v1/Shop.jsx";
import Shop2 from "../page/Shop/v2/Shop2.jsx";
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
import User from "../page/User/v1/User.jsx";
import Order from "../page/User/v1/Order.jsx";
import Profile from "../page/User/v1/Profile.jsx";
import Address from "../page/User/v1/Address.jsx";
import WishList from "../page/User/v1/WishList.jsx";
import Save from "../page/User/v1/Save.jsx";
import Setting from "../page/User/v1/Setting.jsx";
import UserDashboardLayout from "../page/User/v1/UserDashboardLayout.jsx";
import OrderDetail from "../page/User/v1/OrderDetail.jsx";
import ThankYou from "../page/Congress/v1/ThankYou.jsx";
import Success from "../page/Congress/v1/Success.jsx";
import Congratulations from "../page/Congress/v1/Congratulations.jsx";
import Documentation from "../Docs/page/Documentation.jsx";
import DocLayout from "../Docs/layout/DocLayout.jsx";
import Setup from "../Docs/page/Setup.jsx";
import Sorry from "../page/Sorry/Sorry.jsx";

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
    path: "/thankyou",
    element: <ThankYou />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/block",
    element: <Sorry />,
  },
  {
    path: "/congress",
    element: <Congratulations />,
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
    path: "/v2/shop",
    element: <Shop2 />,
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

  // User dashboard route
  {
    path: "/",
    element: <UserDashboardLayout />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/orders",
        element: <Order />,
      },
      {
        path: "/user/orders/:id",
        element: <OrderDetail />,
      },
      {
        path: "/user/address",
        element: <Address />,
      },
      {
        path: "/user/wishlist",
        element: <WishList />,
      },
      {
        path: "/user/save",
        element: <Save />,
      },
      {
        path: "/user/setting",
        element: <Setting />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/",
    element: <DocLayout />,
    children: [
      {
        path: "/introduction",
        element: <Documentation />,
      },
      {
        path: "/setup",
        element: <Setup />,
      },
    ],
  },
]);
