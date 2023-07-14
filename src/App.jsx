import { Container } from "@mui/material";
import ProductSlider from "./components/SlideImg/v1/ProductSlider";
import Slider from "./components/SlideImg/v1/SliderImg";
import Layout from "./layout/GlobalLayout/Layout";
import Product from "./components/Product/v1/Product";
import ViewProduct from "./components/Product/v1/ViewProduct";
import ReuseableCarousel from "./components/ReusableProduct/ReuseableCarousel";
import ReusableProduct from "./components/ReusableProduct/RelatedProduct";

function App() {
  return (
    <>
      <Layout>
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
