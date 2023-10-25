import React from "react";
import BasicAccordion from "./BasicAccording";
import { Box, Container, Grid, Typography } from "@mui/material";
import QuestionForm from "./QuestionForm";
import Layout from "../../layout/GlobalLayout/Layout";
import ServiceCard from "./ServiceCard";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";

const serviceCardsData = [
  {
    title: "A delivery, order or return",
    img: "https://i.ibb.co/dtvZ3Jt/undraw-Delivery-address-re-cjca.png",
    routeLink: "/order-service",
  },
  {
    title: "Track a package",
    img: "https://i.ibb.co/7jDkhT2/undraw-Current-location-re-j130.png",
    routeLink: "/track-package",
  },
  {
    title: "Manage Prime",
    img: "https://i.ibb.co/RHFbL91/undraw-app-data-re-vg5c.png",
    routeLink: "/manage-prime",
  },
  {
    title: "Payments & Gift Cards",
    img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2.png",
    routeLink: "/payment-gift-cards",
  },
  {
    title: "Digital Services and Device Support",
    img: "https://i.ibb.co/PjP6HNH/undraw-Shopping-re-hdd9.png",
    routeLink: "/digital-services-support",
  },
  {
    title: "Online Aid App Download",
    img: "https://i.ibb.co/RHFbL91/undraw-app-data-re-vg5c.png",
    routeLink: "/app-download",
  },
  {
    title: "Find a gift",
    img: "https://i.ibb.co/dtvZ3Jt/undraw-Delivery-address-re-cjca.png",
    routeLink: "/find-a-gift",
  },
  {
    title: "Your Account",
    img: "https://i.ibb.co/dtvZ3Jt/undraw-Delivery-address-re-cjca.png",
    routeLink: "/your-account",
  },
  {
    title: "Customer Service",
    img: "https://i.ibb.co/dtvZ3Jt/undraw-Delivery-address-re-cjca.png",
    routeLink: "/customer-service",
  },
];

function Faq() {
  useScrollToTopOnMount();
  return (
    <Layout>
      <Container>
        <Box mt={5}>
          <Typography variant="h3">
            Welcome to Online Aid Customer Service, Omor
          </Typography>
          <Typography variant="body1">
            What would you like help with today? You can quickly take care of
            most things here, or connect with us when needed.
          </Typography>
        </Box>
        <Grid container spacing={2} my={5}>
          {serviceCardsData.map((service, index) => (
            <ServiceCard
              key={service.routeLink} // Make sure to set a unique key for each component
              Title={service.title}
              Img={service.img}
              RouteLink={service.routeLink}
            />
          ))}
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} mt={5}>
            <BasicAccordion />
          </Grid>
          <Grid item xs={12} md={6}>
            <QuestionForm />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Faq;
