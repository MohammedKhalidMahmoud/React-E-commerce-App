import React from "react";
import ProductsFetch from "./Home_components/productsFetch"; // Import ProductsFetch

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Welcome</h1>
      <ProductsFetch /> 
    </div>
  );
};

export default Home;
