import React from "react";
import BasicAccordion from "./BasicAccording";
import { Container, Grid } from "@mui/material";
import QuestionForm from "./QuestionForm";
import Layout from "../../layout/GlobalLayout/Layout";

function Faq() {
  return (
    <Layout>
      <Container>
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
