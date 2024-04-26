import React, { useEffect, useState, lazy, Suspense } from "react";

import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
// Components
import ViewMobileResponsive from "../../../components/SlideImg/v1/ViewMobileResponsive";
import JustForYouSection from "../../../components/Product/v1/JustForYouSection";
import ViewProductWithDeal from "../../../components/Product/v1/ViewProductWithDeal";
import ProductRowSection from "../../../components/Product/v1/ProductRowSection";
import ViewProductWithSingle from "../../../components/Product/v1/ViewProductWithSingle";
import ReuseableProductCarousel from "../../../components/Product/v1/ReuseableProductCarousel";
import MarqueeProduct from "../../../components/Product/v1/MarqueeProduct";

import LoadingLinearTop from "../../../components/Loading/LoadingLinearTop";
import Loading from "../../../components/Loading/Loading";

import useFlashTitle from "../../../hooks/useFlashTitle";
import Network from "../../../components/Network";

const Layout = lazy(() => import("../../../layout/GlobalLayout/Layout"));

const BannerSlider = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../../../components/SlideImg/v1/BannerSlider"));
      }, 1000);
    })
);

function Home() {
  useFlashTitle("(2) New notification");

  return (
    <>
      <Helmet>
        <title>🚀Buy Black Friday</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <Suspense fallback={<LoadingLinearTop />}>
        <Layout>
          {/* First slider   */}
          <Suspense fallback={<Loading />}>
            <BannerSlider />
          </Suspense>

          <Network />

          <Container>
            <MarqueeProduct SectionTitle={"Most selling product"} />

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
      </Suspense>
    </>
  );
}

export default Home;
