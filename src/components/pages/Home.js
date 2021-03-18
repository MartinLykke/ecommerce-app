import React from "react";
import CarouselSlider from "../frontpage/CarouselSlider";
import ProductCatBtns from "../frontpage/ProductCatBtns";

function Home() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-10">
            <CarouselSlider></CarouselSlider>
          </div>
          <div class="col-sm"></div>
        </div>
        <ProductCatBtns />
      </div>
    </>
  );
}

export default Home;
