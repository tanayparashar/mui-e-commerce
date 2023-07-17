import App from "../App.jsx";
import SearchPage from "../page/SearchPage.jsx";
import ProductDetails from "../page/ProductDetails/v1/ProductDetails.jsx";
import AddToCart from "../page/AddToCart/v1/AddToCart.jsx";
import Shop from "../page/Shop/v1/Shop.jsx";

import { createBrowserRouter } from "react-router-dom";

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
    path: "/product-details/:id",
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
]);
