import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import Product from "../frontpage/Product";
import ProductCatBtns from "../frontpage/ProductCatBtns";

function Home() {
  const [carouselWidth, setCarouselWidth] = useState(400);

  const resizeUI = () => {
    if (window.innerWidth <= 775) {
      setCarouselWidth(300);
    }
    if (window.innerWidth <= 600) {
      setCarouselWidth(200);
    }
  };

  useEffect(() => {
    // only load EL onload

    window.addEventListener("resize", resizeUI);
    return () => {
      window.removeEventListener("resize", resizeUI);
    };
  }, []);
  return (
    <>
      <div class="container shadow p-3 mb-5 bg-white rounded">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-10">
            <CarouselSlider carouselWidth={carouselWidth}></CarouselSlider>
          </div>
          <div class="col-sm"></div>
        </div>
        <ProductCatBtns />
        <div className="">
          <div className="container w-75 p-3">
            <div class="row text-center">
              <div class="col-sm ">
                {" "}
                <Product />
              </div>
              <div class="col-sm">
                {" "}
                <Product />
              </div>
              <div class="col-sm">
                {" "}
                <Product />
              </div>
              <div class="col-sm">
                {" "}
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
