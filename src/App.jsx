import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "./layout/GlobalLayout/Layout";
import { Container } from "@mui/material";

// Components
import Slider from "./components/SlideImg/v1/SliderImg";
import ProductSlider from "./components/SlideImg/v1/ProductSlider";
import Product from "./components/Product/v1/Product";
import ViewProduct from "./components/Product/v1/ViewProduct";
import ReuseableCarousel from "./components/ReusableProduct/ReuseableCarousel";
import ReusableProduct from "./components/ReusableProduct/RelatedProduct";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   // Simulate a delay of 2 seconds to demonstrate the loading component
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <Helmet>
        <title>🚀Buy Black Friday</title>
        <meta name="description" content="Your page description" />
        {/* Add any other meta tags or custom styles here */}
      </Helmet>

      {/* Show the loading component while loading */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Main Layout include Header And Footer component */}
          <Layout>
            {/* First slider   */}
            <Slider />

            <Container>
              <ProductSlider />
              <Product />
              <ViewProduct />
              <ReuseableCarousel sectionTitle={"Shop under $20"} />

              <ReusableProduct sectionTitle={"Browse History"} />
            </Container>
          </Layout>
        </>
      )}
    </>
  );
}

export default App;
