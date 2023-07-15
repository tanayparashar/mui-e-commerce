import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/GlobalLayout/Layout";
import {
  Box,
  Container,
  Grid,
  Rating,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  useTheme,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductDetailSlider from "../../components/SlideImg/v1/ProductDetailSlider";
import WhatWeProvide from "../../components/Commitment/v1/WhatWeProvide";
import ProductInformationTabs from "../../components/Tab/v1/ProductInformationTabs";
import ReusableProduct from "../../components/ReusableProduct/RelatedProduct";

import Counter from "./Counter";
import ColorComponent from "./ColorComponent";
import Loading from "../../components/Loading/Loading";
import ProductDetailsSkelton from "./ProductDetailsSkelton";

export default function ProductDetails() {
  const theme = useTheme();
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a delay of 2 seconds to demonstrate the loading component
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>📄 Product Details</title>
        <meta name="description" content="Your page description" />
        {/* Add any other meta tags or custom styles here */}
      </Helmet>

      {loading ? (
        <ProductDetailsSkelton />
      ) : (
        <>
          <Layout>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Box sx={{ mt: 5 }}>
                    <ProductDetailSlider />
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box mt={5}>
                    <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                      IN STOCK
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 1.5 }}>
                      Foundations Matte Flip Flop
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
                      <Rating name="read-only" value={4.5} readOnly />
                      <Typography sx={{ color: theme.palette.text.disabled }}>
                        (3.1K reviews)
                      </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ mb: 1.5 }}>
                      $97.14
                    </Typography>

                    <Typography variant="body1">
                      Featuring the original ripple design inspired by Japanese
                      bullet trains, the Nike Air Max 97 lets you push your
                      style full-speed ahead.
                    </Typography>

                    <Divider sx={{ my: 5 }} />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Size</Typography>
                      <FormControl
                        sx={{
                          m: 1,
                          minWidth: 120,
                        }}
                        size="small"
                      >
                        <InputLabel>Size</InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={11}>11</MenuItem>
                          <MenuItem value={12}>12</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Counter />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography>Color</Typography>
                      <Box>
                        <ColorComponent />
                      </Box>
                    </Box>

                    <Divider sx={{ my: 5 }} />

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button sx={{ width: "50%" }} variant="contained">
                        <AddShoppingCartIcon /> Add to Cart
                      </Button>
                      <Button sx={{ width: "50%" }} variant="contained">
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <WhatWeProvide />
              <ProductInformationTabs />

              {/* YOU can use your custom product api data JUST use props data={api} */}
              <ReusableProduct sectionTitle={"Related Product"} />
            </Container>
          </Layout>
        </>
      )}
    </>
  );
}
