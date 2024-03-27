import React from "react";
import Cardcomponent from "../../../components/card";
import Slider from "../../../components/slider";
import ProductDetail from "../productDetails";
import About from "../about";

const Home = () => {
  return (
    <div>
      <Slider/>
      <About/>
      <Cardcomponent />
      {/* <ProductDetail/> */}
    </div>
  );
};

export default Home;
