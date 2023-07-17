import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
// Components
import Slider from "../../../components/SlideImg/v1/SliderImg";
import ProductSlider from "../../../components/SlideImg/v1/ProductSlider";
import Product from "../../../components/Product/v1/Product";
import ViewProduct from "../../../components/Product/v1/ViewProduct";
import ReuseableCarousel from "../../../components/ReusableProduct/ReuseableCarousel";
import ReusableProduct from "../../../components/ReusableProduct/RelatedProduct";

import Layout from "../../../layout/GlobalLayout/Layout";
import LoadingLinearTop from "../../../components/Loading/LoadingLinearTop";

import { Container } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Helmet>
        <title>🚀Buy Black Friday</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      {loading ? (
        <LoadingLinearTop />
      ) : (
        <>
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

export default Home;
