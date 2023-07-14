import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import SearchPage from "../page/SearchPage.jsx";
import ProductDetails from "../page/ProductDetails/ProductDetails.jsx";
import AddToCart from "../page/AddToCart/v1/AddToCart.jsx";

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
]);
