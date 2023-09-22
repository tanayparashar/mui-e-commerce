import React from "react";
import CustomCard from "./CustomCard"; // Import your product card component here

const Products = ({ result }) => {
  console.log(result);
  return (
    <div className="card-container">
      {result.map((product) => (
        <CustomCard
          key={product.id}
          img={product.img}
          title={product.title}
          rating={product.rating}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
};

export default Products;
