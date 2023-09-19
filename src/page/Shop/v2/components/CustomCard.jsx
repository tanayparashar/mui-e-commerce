// // import { BsFillBagFill } from "react-icons/bs";

// const CustomCart = ({ img, title, star, reviews, prevPrice, newPrice }) => {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <h3 className="card-title">{title}</h3>
//           <section className="card-reviews">
//             {star} {star} {star} {star}
//             <span className="total-reviews">{reviews}</span>
//           </section>
//           <section className="card-price">
//             <div className="price">
//               <del>{prevPrice}</del> {newPrice}
//             </div>
//             <div className="bag">
//               {/* <BsFillBagFill className="bag-icon" /> */}
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CustomCart;

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

const CustomCard = ({ img, title, rating, reviews, prevPrice, newPrice }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", gap: 2, m: 1 }}>
      <CardMedia
        component="img"
        alt={title}
        // height="auto"
        image={img}
        sx={{ width: 300, height: 150, objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            value={rating}
            readOnly
            defaultValue={rating}
            precision={0.5}
          />
          <Typography variant="body2" color="text.secondary">
            {reviews}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <del>{prevPrice}</del> {newPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
