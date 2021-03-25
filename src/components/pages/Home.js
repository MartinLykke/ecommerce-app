import React from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import Product from "../frontpage/Product";
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
        <div className="">
          <div className="container">
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
