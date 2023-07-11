import { Container } from "@mui/material";
import ProductSlider from "./components/SlideImg/v1/ProductSlider";
import Slider from "./components/SlideImg/v1/SliderImg";
import Layout from "./layout/GlobalLayout/Layout";
import SlideShow from "./components/SlideImg/v1/SlideShow";
import Product from "./components/Product/v1/Product";
import ViewProduct from "./components/Product/v1/ViewProduct";
import CustomCarousel from "./components/SlideImg/v1/CustomCarousel";

function App() {
  return (
    <>
      <Layout>
        <Slider />
        <Container>
          <ProductSlider />
          <Product />
          <ViewProduct />
          <CustomCarousel />
          <h1>Welcome to my app</h1>
          <p>This is the main content of my app.</p>
        </Container>
      </Layout>
    </>
  );
}

export default App;
