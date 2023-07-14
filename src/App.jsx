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

function App() {
  return (
    <>
      <Helmet>
        <title>🚀Buy Black Friday</title>
        <meta name="description" content="Your page description" />
        {/* Add any other meta tags or custom styles here */}
      </Helmet>

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
  );
}

export default App;
