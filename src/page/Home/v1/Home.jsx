import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
// Components
import BannerSlider from "../../../components/SlideImg/v1/BannerSlider";
import ViewMobileResponsive from "../../../components/SlideImg/v1/ViewMobileResponsive";
import JustForYouSection from "../../../components/Product/v1/JustForYouSection";
import ViewProductWithDeal from "../../../components/Product/v1/ViewProductWithDeal";
import ProductRowSection from "../../../components/Product/v1/ProductRowSection";
import ViewProductWithSingle from "../../../components/Product/v1/ViewProductWithSingle";
import ReuseableProductCarousel from "../../../components/Product/v1/ReuseableProductCarousel";

import Layout from "../../../layout/GlobalLayout/Layout";
import LoadingLinearTop from "../../../components/Loading/LoadingLinearTop";

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
      {/* {loading ? (
        <LoadingLinearTop />
      ) : ( */}
      <>
        <Layout>
          {/* First slider   */}
          <BannerSlider />

          <Container>
            <ViewMobileResponsive />
            <ProductRowSection SectionTitle={"Trading product"} />

            <JustForYouSection
              SectionTitle={"Just for you"}
              showRating={true}
            />
            <ViewProductWithDeal />

            <ReuseableProductCarousel
              SectionTitle={"Shop under $20"}
              RouteLink={"/v2/shop"}
            />

            <JustForYouSection
              SectionTitle={"New arrived products"}
              showRating={false}
            />

            <ViewProductWithSingle />

            <ProductRowSection SectionTitle={"Browse History"} />
          </Container>
        </Layout>
      </>
      {/* )} */}
    </>
  );
}

export default Home;
