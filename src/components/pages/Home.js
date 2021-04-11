import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import Product from "../frontpage/Product";
import ProductCatBtns from "../frontpage/ProductCatBtns";
import Modal from "../Modal";
function Home() {
  const [carouselWidth, setCarouselWidth] = useState(400);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const resizeUI = () => {
    if (window.innerWidth <= 775) {
      setCarouselWidth(300);
    }
    if (window.innerWidth <= 600) {
      setCarouselWidth(200);
    } else {
      setCarouselWidth(400);
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
            <Modal open={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
              product name
            </Modal>
          </div>
          <div class="col-sm"></div>
        </div>
        <ProductCatBtns />
        <h1 class="text-center p-4">Most popular</h1>
        <div className="container w-75 p-3">
          <div class="row text-center">
            <div class="col-sm ">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
          </div>
        </div>
        <h1 class="text-center p-4">This week's offers</h1>
        <div className="container w-75 p-3">
          <div class="row text-center">
            <div class="col-sm ">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
            <div class="col-sm">
              {" "}
              <Product setPopupIsOpen={setPopupIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
