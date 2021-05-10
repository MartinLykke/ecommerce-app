import { ControlCameraSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import ProductCatBtns from "../frontpage/ProductCatBtns";
import Modal from "../Modal";
import Products from "../Products/Products";

function Home(products) {
  const [carouselWidth, setCarouselWidth] = useState(400);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [showProductDesc, setshowProductDesc] = useState(true);
  const [userIsPc, setUserIsPc] = useState(true);

  const resizeUI = () => {
    if (window.innerWidth < 992) {
      setshowProductDesc(false);
    } else {
      setshowProductDesc(true);
      setCarouselWidth(400);
    }
    if (window.innerWidth <= 767) {
      setCarouselWidth(300);
      setUserIsPc(false);
    } else {
      setUserIsPc(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeUI);
    resizeUI();
    return () => {
      window.removeEventListener("resize", resizeUI);
    };
  }, []);

  return (
    <>
      <div class="container shadow p-3 mb-5 bg-white rounded">
        {userIsPc && (
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
        )}
        {!userIsPc && (
          <div>
            {" "}
            <CarouselSlider carouselWidth={carouselWidth}></CarouselSlider>
            <Modal open={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
              product name
            </Modal>
          </div>
        )}

        <ProductCatBtns />
        <h1 class="text-center p-4">Most popular</h1>
        <Products
          products={products}
          setPopupIsOpen={setPopupIsOpen}
          showProductDesc={showProductDesc}
        ></Products>
      </div>
    </>
  );
}

export default Home;
